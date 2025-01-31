/*
INSERT INTO email_templates (email_type,template,mes_subject,comment_text,fields) VALUES ('order','На организацию [client] выставлен счет.','Счет на оплату','',array['client','user']);
INSERT INTO email_templates (email_type,template,mes_subject,comment_text,fields) VALUES ('reset_pwd','Пользователю [user] изменен пароль. Новый пароль [pwd]','Новый пароль','',array['user','pwd'])
INSERT INTO email_templates (email_type,template,mes_subject,comment_text,fields) VALUES ('new_account','Создана новая учетная запись для клиента [client]. Параметры учетной записи: логин: [user] пароль: [pwd]','Новая учетная запись','',array['user','pwd','client'])
INSERT INTO email_templates (email_type,template,mes_subject,comment_text,fields) VALUES ('order_changed','Изменен заказ №[number] клиента [client]. Параметры учетной записи: логин: [user] пароль: [pwd]','Новая учетная запись','',array['number','client'])
INSERT INTO email_templates (email_type,template,mes_subject,comment_text,fields) VALUES ('shipment','Отгружен заказ №[number] клиента [client].','Отгрузка','',array['number','client'])
INSERT INTO email_templates (email_type,template,mes_subject,comment_text,fields) VALUES ('balance_to_client','Акт сверки для клиента: [client].','Акт сверки','',array['client'])
*/

--select Find_SRID('public','client_destinations','zone_center')

/*
DROP view client_destinations_dialog;
ALTER TABLE client_destinations
 ALTER COLUMN zone_center TYPE geometry(Point,4326) 
  USING ST_SetSRID(zone_center,4326);
  */
  
  
select login_id
FROM doc_orders_t_tmp_products AS tmp
LEFT JOIN logins ON tmp.login_id=logins.id
WHERE logins.date_time_out IS NOT NULL OR (logins.date_time_out IS NULL AND (now()-logins.date_time_in)>'24 hours')

update doc_orders
SET
	deliv_address = sel.address,
	deliv_address_tsv = to_tsvector(sel.address)
FROM (
SELECT
	doc_orders.id AS doc_id,
	adr.address
FROM doc_orders
left join client_destinations_list AS adr ON adr.id=doc_orders.deliv_destination_id
WHERE doc_orders.deliv_destination_id IS NOT NULL
) AS sel
WHERE sel.doc_id= doc_orders.id

CREATE INDEX doc_orders_address_idx ON doc_orders USING gin(to_tsvector(deliv_address));

SELECT * FROM doc_orders where client_id=348 AND deliv_address_tsv @@ plainto_tsquery('елань')--AND deliv_address_tsv IS NOT NULL limit 5


update client_destinations
set value = adr.address
FROM (
SELECT
	client_destinations_list.id,
	client_destinations_list.address
FROM client_destinations_list
) As adr WHERE adr.id=client_destinations.id
