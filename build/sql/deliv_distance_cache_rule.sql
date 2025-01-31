CREATE OR REPLACE RULE deliv_distance_cache_ignore_duplicates AS
    ON INSERT TO deliv_distance_cache
   WHERE (EXISTS ( SELECT 1
           FROM deliv_distance_cache
          WHERE deliv_distance_cache.warehouse_id = NEW.warehouse_id
			AND deliv_distance_cache.client_destination_id = NEW.client_destination_id
			)) DO INSTEAD NOTHING;