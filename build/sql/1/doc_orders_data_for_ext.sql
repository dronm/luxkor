-- View: public.doc_orders_data_for_ext

-- DROP VIEW public.doc_orders_data_for_ext;

CREATE OR REPLACE VIEW public.doc_orders_data_for_ext AS 
 WITH ttn_data AS (
         SELECT t_cl.ext_id AS carrier_ref,
            t_dr.ext_id AS driver_ref,
            t_dr.name AS driver_name,
            t_dr.drive_perm AS driver_drive_perm,
            t_dr.cel_phone AS driver_cel_phone,
            t_vh.model AS vh_model,
            t_vh.plate AS vh_plate,
            t_vh.load_weight_t AS vh_load_weight_t,
            t_vh.vol AS vh_vol,
            t_vh.trailer_plate AS vh_trailer_plate,
            t_vh.trailer_model AS vh_trailer_model
           FROM carrier_orders t_1
             LEFT JOIN carriers t_cr ON t_cr.id = t_1.carrier_id
             LEFT JOIN clients t_cl ON t_cl.id = t_cr.client_id
             LEFT JOIN drivers t_dr ON t_dr.id = t_1.driver_id
             LEFT JOIN vehicles t_vh ON t_vh.id = t_1.vehicle_id
          WHERE t_1.ord = carrier_orders_today_ord(now()::timestamp without time zone)
        )
 SELECT h.id AS doc_id,
    f.ext_id AS firm_ref,
    w.ext_id AS warehouse_ref,
    w.address AS warehouse_address,
    c.ext_id AS client_ref,
    c.pay_type = 'cash'::payment_types AS pay_cash,
        CASE
            WHEN h.deliv_type = 'by_supplier'::delivery_types AND COALESCE(h.deliv_add_cost_to_product, false) = false THEN h.deliv_total
            ELSE 0::numeric
        END AS deliv_total,
    h.deliv_type,
    h.total_pack AS pack_total,
    h.number,
        CASE
            WHEN COALESCE(h.destination_to_ttn, false) THEN dest.address
            ELSE c.addr_reg
        END AS deliv_address,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.driver_ref
               FROM ttn_data)
            ELSE dr.ext_id
        END AS driver_ref,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.driver_name
               FROM ttn_data)
            ELSE dr.name
        END AS driver_name,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.driver_drive_perm
               FROM ttn_data)
            ELSE dr.drive_perm
        END AS driver_drive_perm,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.driver_cel_phone
               FROM ttn_data)
            ELSE dr.cel_phone
        END AS driver_cel_phone,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.vh_trailer_plate
               FROM ttn_data)
            ELSE vh.trailer_plate
        END AS vh_trailer_plate,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.vh_trailer_model
               FROM ttn_data)
            ELSE vh.trailer_model
        END AS vh_trailer_model,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.carrier_ref
               FROM ttn_data)
            ELSE NULL::character varying
        END AS carrier_ref,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.vh_model
               FROM ttn_data)
            ELSE vh.model
        END AS vh_model,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.vh_plate
               FROM ttn_data)
            ELSE vh.plate
        END AS vh_plate,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.vh_vol
               FROM ttn_data)
            ELSE vh.vol
        END AS vh_vol,
        CASE
            WHEN ttn_pairs.firm_id IS NOT NULL THEN ( SELECT ttn_data.vh_load_weight_t
               FROM ttn_data)
            ELSE vh.load_weight_t
        END AS vh_load_weight_t,
    p.name AS group_name,
    pg.ext_id AS product_group_ref,
    products_descr(p.*, t.mes_length, t.mes_width, t.mes_height, true) AS product_name,
    t.mes_length,
    t.mes_width,
    t.mes_height,
    mu.name AS measure_unit,
    mu.ext_id AS measure_unit_ref,
    bmu.ext_id AS base_measure_unit_ref,
    eval(eval_params(pmu.calc_formula, t.mes_length, t.mes_width, t.mes_height)) AS measure_unit_k,
    t.quant,
        CASE
            WHEN COALESCE(t.quant) = 0::numeric THEN 0::numeric
            ELSE round(t.total / t.quant, 2)
        END AS price,
    t.total,
    h.ext_order_id,
    h.ext_ship_id,
    h.client_comment,
    h.sales_manager_comment,
    h.deliv_vehicle_count,
    f.nds AS firm_nds,
    h.total_volume,
    h.total_weight
   FROM doc_orders h
     LEFT JOIN doc_orders_t_products t ON t.doc_id = h.id
     LEFT JOIN products p ON p.id = t.product_id
     LEFT JOIN firms f ON f.id = h.firm_id
     LEFT JOIN warehouses w ON w.id = h.warehouse_id
     LEFT JOIN clients c ON c.id = h.client_id
     LEFT JOIN client_destinations_list dest ON dest.id = h.deliv_destination_id
     LEFT JOIN measure_units mu ON mu.id = t.measure_unit_id
     LEFT JOIN product_measure_units pmu ON pmu.product_id = p.id AND pmu.measure_unit_id = t.measure_unit_id
     LEFT JOIN measure_units bmu ON bmu.id = p.base_measure_unit_id
     LEFT JOIN deliveries dlv ON dlv.doc_order_id = h.id
     LEFT JOIN vehicles vh ON vh.id = dlv.vehicle_id
     LEFT JOIN drivers dr ON dr.id = vh.driver_id
     LEFT JOIN product_groups pg ON pg.id = p.product_group_id
     LEFT JOIN ( SELECT ttn_attr_pairs.warehouse_id,
            ttn_attr_pairs.firm_id
           FROM ttn_attr_pairs) ttn_pairs ON ttn_pairs.firm_id = h.firm_id AND ttn_pairs.warehouse_id = h.warehouse_id;

ALTER TABLE public.doc_orders_data_for_ext
  OWNER TO polimerplast;

