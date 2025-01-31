<?php
/**
	DO NOT MODIFY THIS FILE!	
	Its content is generated automaticaly from template placed at build/permissions/permission_php.tmpl.	
 */
function method_allowed($contrId,$methId){
$permissions = array();

			$permissions['User_Controller_get_list']=TRUE;
		
			$permissions['User_Controller_get_object']=TRUE;
		
			$permissions['User_Controller_login']=TRUE;
		
			$permissions['User_Controller_logout']=TRUE;
		
			$permissions['User_Controller_login_html']=TRUE;
		
			$permissions['User_Controller_logged']=TRUE;
		
			$permissions['User_Controller_get_account']=TRUE;
		
			$permissions['User_Controller_update']=TRUE;
		
			$permissions['Constant_Controller_get_list']=TRUE;
		
			$permissions['Constant_Controller_get_object']=TRUE;
		
			$permissions['Constant_Controller_get_values']=TRUE;
		
			$permissions['Enum_Controller_get_enum_list']=TRUE;
		
			$permissions['Enum_Controller_get_enum_list']=TRUE;
		
			$permissions['Firm_Controller_get_list']=TRUE;
		
			$permissions['Warehouse_Controller_get_list']=TRUE;
		
			$permissions['Warehouse_Controller_get_list_for_order']=TRUE;
		
			$permissions['Product_Controller_get_list']=TRUE;
		
			$permissions['Product_Controller_get_list_for_order']=TRUE;
		
			$permissions['Product_Controller_get_object']=TRUE;
		
			$permissions['ProductWarehouse_Controller_get_list']=TRUE;
		
			$permissions['MeasureUnit_Controller_get_list']=TRUE;
		
			$permissions['ProductMeasureUnit_Controller_get_list']=TRUE;
		
			$permissions['Client_Controller_get_pop_firm']=TRUE;
		
			$permissions['ClientUser_Controller_get_list']=TRUE;
		
			$permissions['ClientUser_Controller_get_object']=TRUE;
		
			$permissions['DOCOrder_Controller_insert']=TRUE;
		
			$permissions['DOCOrder_Controller_update']=TRUE;
		
			$permissions['DOCOrder_Controller_delete']=TRUE;
		
			$permissions['DOCOrder_Controller_get_current_for_client_list']=TRUE;
		
			$permissions['DOCOrder_Controller_get_closed_list']=TRUE;
		
			$permissions['DOCOrder_Controller_get_object']=TRUE;
		
			$permissions['DOCOrder_Controller_before_open']=TRUE;
		
			$permissions['DOCOrder_Controller_get_products_descr']=TRUE;
		
			$permissions['DOCOrder_Controller_get_history']=TRUE;
		
			$permissions['DOCOrder_Controller_print_order']=TRUE;
		
			$permissions['DOCOrder_Controller_print_torg12']=TRUE;
		
			$permissions['DOCOrder_Controller_print_invoice']=TRUE;
		
			$permissions['DOCOrder_Controller_print_passport']=TRUE;
		
			$permissions['DOCOrder_Controller_print_ttn']=TRUE;
		
			$permissions['DOCOrder_Controller_print_ship_docs']=TRUE;
		
			$permissions['DOCOrder_Controller_pay_orders_list']=TRUE;
		
			$permissions['DOCOrder_Controller_calc_totals']=TRUE;
		
			$permissions['DOCOrder_Controller_recalc_product_prices']=TRUE;
		
			$permissions['DOCOrder_Controller_calc_deliv_cost']=TRUE;
		
			$permissions['DOCOrder_Controller_get_cancel_cause']=TRUE;
		
			$permissions['DOCOrder_Controller_get_children']=TRUE;
		
			$permissions['DOCOrder_Controller_ext_invoice_exists']=TRUE;
		
			$permissions['DOCOrder_Controller_ext_order_exists']=TRUE;
		
			$permissions['DOCOrder_Controller_ext_ship_exists']=TRUE;
		
			$permissions['DOCOrder_Controller_set_cancel_cause']=TRUE;
		
			$permissions['DOCOrder_Controller_get_pop_warehouse']=TRUE;
		
			$permissions['DOCOrderDOCTProduct_Controller_insert']=TRUE;
		
			$permissions['DOCOrderDOCTProduct_Controller_update']=TRUE;
		
			$permissions['DOCOrderDOCTProduct_Controller_delete']=TRUE;
		
			$permissions['DOCOrderDOCTProduct_Controller_get_list']=TRUE;
		
			$permissions['DOCOrderDOCTProduct_Controller_get_object']=TRUE;
		
			$permissions['DOCOrderDOCTProduct_Controller_get_object']=TRUE;
		
			$permissions['Delivery_Controller_assigned_orders_for_client']=TRUE;
		
			$permissions['Delivery_Controller_current_position_client']=TRUE;
		
			$permissions['Vehicle_Controller_get_select_list']=TRUE;
		
			$permissions['DeliveryPeriod_Controller_get_list']=TRUE;
		
			$permissions['DelivCostOpt_Controller_get_list']=TRUE;
		
				$permissions['ClientDestination_Controller_insert']=TRUE;
			
				$permissions['ClientDestination_Controller_update']=TRUE;
			
				$permissions['ClientDestination_Controller_delete']=TRUE;
			
				$permissions['ClientDestination_Controller_get_list']=TRUE;
			
				$permissions['ClientDestination_Controller_get_object']=TRUE;
			
				$permissions['ClientDestination_Controller_get_address_gps']=TRUE;
			
				$permissions['ClientDestination_Controller_complete_address']=TRUE;
			
				$permissions['Payment_Controller_get_schedule']=TRUE;
			
				$permissions['Payment_Controller_get_def_debt_details']=TRUE;
			
			$permissions['Kladr_Controller_get_region_list']=TRUE;
		
			$permissions['Kladr_Controller_get_raion_list']=TRUE;
		
			$permissions['Kladr_Controller_get_naspunkt_list']=TRUE;
		
			$permissions['Kladr_Controller_get_gorod_list']=TRUE;
		
			$permissions['Kladr_Controller_get_ulitsa_list']=TRUE;
		
			$permissions['Kladr_Controller_get_from_naspunkt']=TRUE;
		
			$permissions['Kladr_Controller_get_prior_region_list']=TRUE;
		
			$permissions['Report_Controller_client_balance']=TRUE;
		
			$permissions['Report_Controller_naspunkt_cost']=TRUE;
		
			$permissions['ProductionCity_Controller_get_list']=TRUE;
		
				$permissions['ClientSearch_Controller_search']=TRUE;
			
return array_key_exists($contrId.'_'.$methId,$permissions);
}
?>