-- View: public.constants_list_view

-- DROP VIEW public.constants_list_view;

CREATE OR REPLACE VIEW public.constants_list_view
 AS
 SELECT 'client_geo_zone_radius_m'::text AS id,
    const_client_geo_zone_radius_m_view.name,
    const_client_geo_zone_radius_m_view.descr,
    const_client_geo_zone_radius_m_view.val_descr
   FROM const_client_geo_zone_radius_m_view
UNION ALL
 SELECT 'geo_zone_check_points_count'::text AS id,
    const_geo_zone_check_points_count_view.name,
    const_geo_zone_check_points_count_view.descr,
    const_geo_zone_check_points_count_view.val_descr
   FROM const_geo_zone_check_points_count_view
UNION ALL
 SELECT 'new_client_check_sec'::text AS id,
    const_new_client_check_sec_view.name,
    const_new_client_check_sec_view.descr,
    const_new_client_check_sec_view.val_descr
   FROM const_new_client_check_sec_view
UNION ALL
 SELECT 'db_controls_refresh_sec'::text AS id,
    const_db_controls_refresh_sec_view.name,
    const_db_controls_refresh_sec_view.descr,
    const_db_controls_refresh_sec_view.val_descr
   FROM const_db_controls_refresh_sec_view
UNION ALL
 SELECT 'grid_rows_per_page_count'::text AS id,
    const_grid_rows_per_page_count_view.name,
    const_grid_rows_per_page_count_view.descr,
    const_grid_rows_per_page_count_view.val_descr
   FROM const_grid_rows_per_page_count_view
UNION ALL
 SELECT 'map_default_lat'::text AS id,
    const_map_default_lat_view.name,
    const_map_default_lat_view.descr,
    const_map_default_lat_view.val_descr
   FROM const_map_default_lat_view
UNION ALL
 SELECT 'map_default_lon'::text AS id,
    const_map_default_lon_view.name,
    const_map_default_lon_view.descr,
    const_map_default_lon_view.val_descr
   FROM const_map_default_lon_view
UNION ALL
 SELECT 'wait_days_before_arch'::text AS id,
    const_wait_days_before_arch_view.name,
    const_wait_days_before_arch_view.descr,
    const_wait_days_before_arch_view.val_descr
   FROM const_wait_days_before_arch_view
UNION ALL
 SELECT 'main_measure_unit_id'::text AS id,
    const_main_measure_unit_id_view.name,
    const_main_measure_unit_id_view.descr,
    const_main_measure_unit_id_view.val_descr
   FROM const_main_measure_unit_id_view
UNION ALL
 SELECT 'product_measure_unit_check_deviat'::text AS id,
    const_product_measure_unit_check_deviat_view.name,
    const_product_measure_unit_check_deviat_view.descr,
    const_product_measure_unit_check_deviat_view.val_descr
   FROM const_product_measure_unit_check_deviat_view
   
UNION ALL
 SELECT 'order_deliv_add_cost_to_product'::text AS id,
    const_order_deliv_add_cost_to_product_view.name,
    const_order_deliv_add_cost_to_product_view.descr,
    const_order_deliv_add_cost_to_product_view.val::text AS val_descr
   FROM const_order_deliv_add_cost_to_product_view

UNION ALL
 SELECT 'order_destination_to_ttn'::text AS id,
    const_order_destination_to_ttn_view.name,
    const_order_destination_to_ttn_view.descr,
    const_order_destination_to_ttn_view.val::text AS val_descr
   FROM const_order_destination_to_ttn_view

UNION ALL
 SELECT 'order_no_carrier_print'::text AS id,
    const_order_no_carrier_print_view.name,
    const_order_no_carrier_print_view.descr,
    const_order_no_carrier_print_view.val::text AS val_descr
   FROM const_order_no_carrier_print_view
   
   ;

ALTER TABLE public.constants_list_view
    OWNER TO polimerplast;


