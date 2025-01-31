<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:import href="Model_php.xsl"/>

<!-- -->
<xsl:variable name="MODEL_ID" select="'DOCOrder'"/>
<!-- -->

<xsl:output method="text" indent="yes"
			doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
			doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
<xsl:template match="/">
	<xsl:apply-templates select="metadata/models/model[@id=$MODEL_ID]"/>
</xsl:template>
			
<xsl:template match="model"><![CDATA[<?php]]>
<xsl:call-template name="add_requirements"/>
require_once('functions/ExtProg.php');
require_once('functions/PPEmailSender.php');

class <xsl:value-of select="@id"/>_Model extends <xsl:value-of select="@parent"/>{
	<xsl:call-template name="add_constructor"/>

	public function set_ship_deliv_expenses($extShipId,$delivExpenses){
	
		$head = ['ext_ship_id'=>$extShipId,'deliv_expenses'=>$delivExpenses];
		ExtProg::set_deliv_expenses($head);
	}

	public function create_alter_order($docId){
		$link = $this->getDbLink();
		$head=NULL;
		$items=NULL;
		
		DOCOrder_Controller::docDataForExt($link,$docId,$head,$items);
		$res = array();
		ExtProg::order($head,$items,$res);
		
		if (
		isset($res['orderRef'])
		&amp;&amp;
			(!isset($head['ext_order_id'])
			|| ( isset($head['ext_order_id']) &amp;&amp; $head['ext_order_num']!=$res['orderNum'] )
			)
		){
			//Отметка о счете
			$link->query(sprintf(
			"UPDATE doc_orders
			SET
				ext_order_id='%s',
				ext_order_num='%s'
			WHERE id=%d",
			$res['orderRef'],
			$res['orderNum'],
			$docId
			));
		}
		
		//Печатная форма счета из 1с, если сеть eamil
		$ar = $link->query_first(sprintf(
		"SELECT
			h.ext_order_id,
			(u.email IS NOT NULL) AS email_exists
		FROM doc_orders h
		LEFT JOIN users AS u ON u.id=h.client_user_id
		WHERE h.id=%d",
		$docId
		));
		if (!is_array($ar) || !count($ar)){
			throw new Exception("Документ не найден!");
		}
	
		if (strlen($ar['ext_order_id']) &amp;&amp; $ar['email_exists']=='t'){			
			$tmp_file = ExtProg::print_order(
				$ar['ext_order_id'],$_SESSION['user_ext_id'],1,
				array('name'=>('Счет_'.uniqid().'.pdf'),'toFile'=>TRUE)
				);
	
			//отправить по мылу счет
			$mail_id = PPEmailSender::addEMail(
				$link,
				sprintf("email_text_order(%d)",$docId),
				array($tmp_file),
				'order'
				);
		}	
	}
	
	public function insert($needId = FALSE, $row = NULL){
		$view_id_for_db = "'".$_REQUEST['view_id']."'";
	
		$link = $this->getDbLink();
		$link->query('BEGIN');
		try{	
			if ($_SESSION['role_id']=='client'){
				$state = 'waiting_for_us';
				
				//Префикс нумерации
				$num_q = 
				"SELECT
					const_new_order_prefix_val() || coalesce(MAX( substr(t.number::varchar,length(const_new_order_prefix_val())+1)::int ),0)+1
				FROM doc_orders AS t
				WHERE
					substr(t.number::varchar,1,length(const_new_order_prefix_val()))=const_new_order_prefix_val()";
				
			}
			else{
				//Просто номер
				$num_q = 
				"SELECT
					coalesce( MAX(t.number::int),0)+1
				FROM doc_orders AS t
				WHERE
					substr(t.number::varchar,1,length(const_new_order_prefix_val()))&lt;&gt;const_new_order_prefix_val()";
			
				//По Новому ТЗ от ноября 2016 в производство ТОЛЬКО через кнопку!!!
				$state = 'waiting_for_payment';
			
				/*ТАК БЫЛО РАНЬШЕ: статус зависит от вида работы
				с клиентом - нал/предоплата/отсрочка
				*/
				/*
				$ar = $link->query_first(sprintf(
					"SELECT pay_type FROM clients WHERE id=%d",
					$this->getFieldById('client_id')->getValueForDb()
				));
				if (is_array($ar)&amp;&amp;count($ar)&gt;0){
					$state = ($ar['pay_type']=='with_delay')? 'producing':'waiting_for_payment';
				}
				*/
			}
		
			//ВСТАВКА ДОКУМЕНТА
			$ids_ar = $link->query_first($this->getInsertQuery(TRUE));
			$doc_id = $ids_ar['id'];
			$link->query(
				sprintf("SELECT %s_before_write(%s,%d)",
				$this->getTableName(),$view_id_for_db,$doc_id)
			);
			
			$link->query(
				sprintf("UPDATE %s
				SET
					processed = %s,
					number = (%s)
				WHERE id=%d",
				$this->getTableName(),$this->getFieldById('processed')->getValueForDb(),$num_q,
				$doc_id));			
			
			$link->query(
				sprintf("INSERT INTO doc_orders_states
				(
					doc_orders_id,
					date_time,
					state,
					user_id)
				VALUES (
					%d,
					now()::timestamp without time zone,
					'%s'::order_states,
					'%s')",
				$doc_id,
				$state,
				$_SESSION['user_id'])
			);
			if ($state != 'waiting_for_us'){
				//счет
				$this->create_alter_order($doc_id);
			}
			
			$link->query('COMMIT');
		}
		catch(Exception $e){
			$link->query('ROLLBACK');
			throw $e;
		}
		
		return array('id'=>$doc_id);
	}
	public function update(){		
		if ($this->getFieldById('cust_surv_date_time')->getValue()){
			//Маркетолог проводит опрос			
			parent::update();
		}
		else{	
			$view_id_for_db = "'".$_REQUEST['view_id']."'";
				
			$doc_id = $this->getFieldById('id')->getOldValueForDb();
			$link = $this->getDbLink();
			
			//Проверка статуса документа
			
			$ar = $link->query_first(sprintf(
			"SELECT
				st.id AS state_id,
				st.state,
				st.state IN (
					'produced',
					'loading',
					'on_way',
					'unloading',
					'closed',
					'canceled',
					'canceled_by_sales_manager',
					'canceled_by_client'
				) AS check,
				(SELECT COALESCE(cl.login_allowed,FALSE)
				FROM clients cl
				WHERE cl.id=o.client_id
				) AS client_login_allowed
			FROM doc_orders_states AS st
			LEFT JOIN doc_orders AS o ON o.id=st.doc_orders_id
			WHERE st.doc_orders_id=%d
			ORDER BY st.date_time DESC
			LIMIT 1
			",$doc_id));
			
			$closed_state = (is_array($ar)&amp;&amp;count($ar)&amp;&amp;$ar['check']=='t');
			/*
			if (is_array($ar)&amp;&amp;count($ar)&amp;&amp;$ar['check']=='t'){
				throw new Exception('Не верный статус документа!');
			}
			*/
			
			/*может поменятся в тек.модуле!!!!*/
			if ($_SESSION['role_id']=='client'){
				$new_state = 'waiting_for_us';
			}
			else if ($_SESSION['role_id']!='client'&amp;&amp;$closed_state){
				//мы изменняем в закрытом статусе: коммент+телефон+дата+расходы на доставку
				$new_state = NULL;
			}
			else if ($_SESSION['role_id']!='client'
				&amp;&amp;$ar['client_login_allowed']=='f'){
				/** статус НЕ надо менять
				 * Т.К у клиента нет личного кабинета
				 */
				$new_state = NULL;
			}
			else{
				//может и не надо менять если поменяли только наш коммент
				$new_state = 'waiting_for_client';
			}
			
			$link->query('BEGIN');
			try{
				$create_alter_order = FALSE;
				
				if (isset($new_state)){
					$res = $link->query_first(
						sprintf("INSERT INTO doc_orders_states
						(
							doc_orders_id,
							date_time,
							state,
							user_id)
						VALUES (
							%d,
							now()::timestamp without time zone,
							'%s',
							'%s')
						RETURNING id",
						$doc_id,
						$new_state,
						$_SESSION['user_id'])
					);
				}
				else{
					$res = array('id'=>$ar['state_id']);
				}
				
				$modif = FALSE;
				
				if (is_array($res)&amp;&amp;count($res)){
					//all differances
					
					/** список полей изменение которых
					 * не передается клиенту
					 */
					$fields_us_only = array('sales_manager_comment');
					$fields_us_modif = FALSE;

					/** список полей изменение которых
					 * не влияет на счет
					 */
					$fields_order_no_modif = array('delivery_plan_date','deliv_responsable_tel','tel','vehicle_id');
					
					$sel = '';
					$sel_no_modif = '';
					
					$deliv_expenses = NULL;
					
					$fields = $this->getFieldIterator();				
					while($fields->valid()) {
						$field = $fields->current();
						$f_id = $field->getId();
						
						if (!is_null($field->getValue())){
							//значение изменилось
							$f_val = $field->getValueForDb();

							if ($f_id=='deliv_expenses'||$f_id=='deliv_expenses_edit'){
								if ($f_id=='deliv_expenses'){
									$deliv_expenses = $f_val;
								}
							}
							else if (array_key_exists($f_id,$fields_us_only)){
								//изменилось наше поле - не фиксируем
								$fields_us_modif = TRUE;
							}
							else if (array_key_exists($f_id,$fields_order_no_modif)){
								//изменилось поле которое не изменит счет, но сменит статус
								$sel_no_modif.= ($sel_no_modif=='')? '':' UNION ';
								$sel_no_modif.= sprintf("(SELECT
									%d,
									'%s',
									d.%s::text,
									%s::text
								FROM doc_orders AS d
								WHERE d.id=%d AND coalesce(d.%s::text,'')&lt;&gt;%s::text)",
								$res['id'], $f_id, $f_id,$f_val,
								$doc_id, $f_id, $f_val);							
							}							
							else{							
								$sel.= ($sel=='')? '':' UNION ';
								$sel.= sprintf("(SELECT
									%d,
									'%s',
									d.%s::text,
									%s::text
								FROM doc_orders AS d
								WHERE d.id=%d AND coalesce(d.%s::text,'')&lt;&gt;%s::text)",
								$res['id'], $f_id, $f_id,$f_val,
								$doc_id, $f_id, $f_val);							
							}
						}
						$fields->next();
					}
					if (strlen($sel)){
						$q = sprintf("INSERT INTO doc_orders_head_history
						(doc_orders_states_id, field, old_val, new_val)
						(%s)",$sel);
						$qres = $link->query($q);
						$modif = $modif||($link->affected_rows($qres)&gt;0);
					}
					if (strlen($sel_no_modif)){
						$link->query(
						sprintf("INSERT INTO doc_orders_head_history
						(doc_orders_states_id, field, old_val, new_val)
						(%s)",$sel_no_modif)
						);
					}
									
					//products
					$t_attrs = array('quant','mes_length','mes_width','mes_height','price',
						'pack_exists','pack_in_price');
					$fld = '';
					$old_vals='';
					$cond='';
					foreach($t_attrs as $f){
						$fld.= ($fld=='')? "":"||','||";
						$fld.=sprintf(
						"CASE
							WHEN not_equal(t.%s,t_tmp.%s) THEN '%s'
							ELSE ''
						END",$f,$f,$f);

						$old_vals.= ($old_vals=='')? "":"||','||";
						$old_vals.=sprintf(
						"CASE
							WHEN not_equal(t.%s,t_tmp.%s) THEN t.%s::text
							ELSE ''							
						END",$f,$f,$f);
						
						$cond.= ($cond=='')? "":" OR ";
						$cond.=sprintf("not_equal(t.%s,t_tmp.%s)",$f,$f);						
					}
					$sel = sprintf(
					"(SELECT
						%d,
						COALESCE(t_tmp.product_id,t.product_id),
						CASE
							WHEN t_tmp.product_id IS NOT NULL
								AND t.product_id IS NOT NULL THEN
								'modif'
							WHEN t_tmp.product_id IS NULL
								AND t.product_id IS NOT NULL THEN
								'delete'
							WHEN t_tmp.product_id IS NOT NULL
								AND t.product_id IS NULL THEN
								'add'									
						END AS oper,
						%s AS fields,
						%s AS old_vals
						
					FROM doc_orders_t_tmp_products AS t_tmp
					FULL JOIN doc_orders_t_products AS t
						ON t.product_id=t_tmp.product_id AND t.doc_id=%d
							AND t.mes_height=t_tmp.mes_height
							AND t.mes_length=t_tmp.mes_length
							AND t.mes_width=t_tmp.mes_width
					WHERE t_tmp.view_id=%s AND (%s))
					UNION ALL
					(SELECT 
						%d,
						t.product_id,
						'delete' AS oper,
						'product_id' AS fields,
						pr.name AS old_vals
						FROM doc_orders_t_products t
						LEFT JOIN products pr ON pr.id=t.product_id
						WHERE t.doc_id=%d AND t.product_id NOT IN (
							SELECT t_tmp.product_id
							FROM doc_orders_t_tmp_products t_tmp
							WHERE t_tmp.view_id=%s
						)					
					)
					",
					$res['id'],
					$fld,
					$old_vals,
					$doc_id, $view_id_for_db, $cond,
					
					$res['id'],
					$doc_id,$view_id_for_db
					);
					
					$q = sprintf("INSERT INTO doc_orders_products_history
					(doc_orders_states_id,
					product_id,oper,fields,old_vals)
					(%s)",$sel);
					$qres = $link->query($q);
					$modif = $modif||($link->affected_rows($qres)&gt;0);
					//throw new Exception('modif='.$modif);				
					
					if (!$modif&amp;&amp;isset($new_state)&amp;&amp;$fields_us_modif){
						/** если изменились только наши атрибуты
						 * удалим новый статус
						 */
						$link->query(sprintf(
						"DELETE FROM doc_orders_states
							WHERE id=%d",
						$res['id'])
						);
						$create_alter_order = TRUE;
					}
					else if (!$modif&amp;&amp;isset($new_state)){
						/** если подтверждаем без изменений
						 * то выписываем счет на оплату!
						 */
						//сменим статус
						$link->query(sprintf(
						"UPDATE doc_orders_states
							SET state='waiting_for_payment'
							WHERE id=%d",
						$res['id']));
					
						$create_alter_order = TRUE;
					}					
					/* Мы изменили заявку  и не надо отдавать клиенту
					 */
					else if ($modif&amp;&amp;!isset($new_state)){
						$create_alter_order = TRUE;
					}
				}
				/*
				if ($_SESSION['role_id']!='client'){
					//Последний редактировавший
					$this->getFieldById('submit_user_id')->setValue($_SESSION['user_id']);
				}
				*/
				
				//ОБНОВЛЕНИЕ ДОКУМЕНТА
				$link->query(
					sprintf("SELECT %s_before_write(%s,%d)",
					$this->getTableName(),$view_id_for_db,
					$this->getFieldById('id')->getOldValue())
				);
				$q = $this->getUpdateQuery();
				if ($q!=''){
					if (!is_null($deliv_expenses)){
						$q.=' RETURNING ext_ship_id';
					}
				
					$q_id = $link->query($q);
				}
				
				if ($new_state=='waiting_for_client'){
					//отправим собщение
					PPEmailSender::addEMail(
						$link,
						sprintf("email_text_order_changed(%d)",$doc_id),
						NULL,
						'order_changed'
						);
				}				
				
				//Added 27/02/24: if order is derived from a split order - do not create 1c Order!
				$derived_from_split_order = ($ar['state'] == 'waiting_for_us');				
				
				if (
				!$create_alter_order
				&amp;&amp; !is_null($deliv_expenses)
				&amp;&amp; ($ar = $link->fetch_array($q_id))
				&amp;&amp; $ar['ext_ship_id']
				){
					$this->set_ship_deliv_expenses($ar['ext_ship_id'],$deliv_expenses);

				}else if ($create_alter_order &amp;&amp; !$derived_from_split_order){
					$this->create_alter_order($doc_id);
				}
				
				$link->query('COMMIT');
				
			}
			catch(Exception $e){
				$link->query('ROLLBACK');
				throw $e;
			}
		}
	}		
}
<![CDATA[?>]]>
</xsl:template>
			
</xsl:stylesheet>
