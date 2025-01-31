-- View: public.client_dialog

-- DROP VIEW public.client_dialog;

CREATE OR REPLACE VIEW public.client_dialog AS 
 SELECT cl.id,
    cl.name,
    cl.inn,
    cl.kpp,
    cl.addr_reg,
    cl.addr_mail,
    cl.addr_mail_same_as_reg,
    cl.telephones,
    cl.ogrn,
    cl.okpo,
    cl.acc,
    cl.bank_name,
    cl.bank_code,
    cl.bank_acc,
    cl.registered,
    cl.pay_type,
    cl.pay_delay_days,
    cl.pay_order,
    cl.pay_order_type,
    cl.pay_fix_to_dow,
    cl.pay_dow,
    cl.pay_ban_on_debt_days,
    cl.pay_debt_days,
    cl.pay_ban_on_debt_sum,
    cl.pay_debt_sum,
    cl.login_allowed,
    cl.sms_on_order_change,
    cl.email_sert,
    cl.show_delivery_tab,
    cl.ext_id,
    cl.name_full,
    cl.pay_dow_days,
    cl.client_activity_id,
    cl.def_firm_id,
    cl.def_warehouse_id,
    clac.name AS client_activity_descr,
    f.name AS def_firm_descr,
    w.name AS def_warehouse_descr,
    cl.deleted,
    cl.email,
    cl.deliv_add_cost_to_product,
    cl.is_supplier,
    cl.is_carrier,
    cl.comment_text
   FROM clients cl
     LEFT JOIN client_activities clac ON clac.id = cl.client_activity_id
     LEFT JOIN firms f ON f.id = cl.def_firm_id
     LEFT JOIN warehouses w ON w.id = cl.def_warehouse_id;

ALTER TABLE public.client_dialog
  OWNER TO polimerplast;

