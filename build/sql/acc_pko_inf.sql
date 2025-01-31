-- View: public.acc_pko_inf

-- DROP VIEW public.acc_pko_inf;

CREATE OR REPLACE VIEW public.acc_pko_inf AS 
 SELECT doc_orders.acc_pko_date,
    doc_orders.number AS "Заявка",
    firms.name AS "Фирма",
    clients.name AS "Клиент",
    doc_orders.acc_pko_total AS "Сумма"
   FROM doc_orders
     LEFT JOIN clients ON clients.id = doc_orders.client_id
     LEFT JOIN firms ON firms.id = doc_orders.firm_id;

ALTER TABLE public.acc_pko_inf
  OWNER TO polimerplast;

