-- View: public.regl_undeliv_orders_remind

-- DROP VIEW public.regl_undeliv_orders_remind;

CREATE OR REPLACE VIEW public.regl_undeliv_orders_remind AS 
 SELECT u.cel_phone,
    sms_templates_text(ARRAY[format('("user","%s")'::text, u.name_full::text)::template_value, format('("client","%s")'::text, replace(cl.name_full, '"'::text, ''::text))::template_value, format('("date","%s")'::text, date8_descr(o.delivery_plan_date))::template_value, format('("vm","%s")'::text, o.total_volume::text)::template_value, format('("wt","%s")'::text, o.total_weight::text)::template_value, format('("wh","%s")'::text, w.name::text)::template_value, format('("order","%s")'::text, o.number::text)::template_value], ( SELECT t.template
           FROM sms_templates t
          WHERE t.sms_type = 'driver_first_deliv'::sms_types)) AS message
   FROM doc_orders o
     LEFT JOIN clients cl ON cl.id = o.client_id
     LEFT JOIN users u ON u.id = o.user_id
     LEFT JOIN warehouses w ON w.id = o.warehouse_id
  WHERE o.delivery_plan_date < (now()::date + '1 day'::interval) AND o.deliv_type = 'by_client'::delivery_types
  ORDER BY o.delivery_plan_date;

ALTER TABLE public.regl_undeliv_orders_remind
  OWNER TO polimerplast;

