-- View: public.doc_orders_all_list

-- DROP VIEW public.doc_orders_all_list;

CREATE OR REPLACE VIEW public.doc_orders_all_list
 AS
 SELECT d.id,
    d.number,
    d.date_time,
    d.date_time_descr,
    d.delivery_plan_date,
    d.delivery_plan_date_descr,
    d.behind_plan,
    d.address_descr,
    d.client_id,
    d.client_descr,
    d.warehouse_id,
    d.warehouse_descr,
    d.products_descr,
    d.product_ids,
    d.total,
    d.total_descr,
    d.total_quant,
    d.total_volume,
    d.state,
    d.state_descr,
    d.ext_ship_num,
    d.ext_order_num,
    d.delivery_fact_date,
    d.delivery_fact_date_descr,
    d.client_number,
    d.printed,
    d.cust_surv_date_time,
    d.cust_surv_date_time_descr,
    d.submit_user_descr,
    d.paid,
    d.paid_by_bank,
    d.pay_type = 'cash'::payment_types AND COALESCE(d.paid, false) = false AND COALESCE(d.paid_by_bank, false) = false OR (d.state <> ALL (ARRAY['new'::order_states, 'waiting_for_client'::order_states, 'waiting_for_us'::order_states, 'shipped'::order_states, 'loading'::order_states, 'on_way'::order_states, 'unloading'::order_states, 'closed'::order_states, 'canceled_by_sales_manager'::order_states, 'canceled_by_client'::order_states])) AS is_current
   FROM doc_orders_list d;

ALTER TABLE public.doc_orders_all_list
    OWNER TO ;


