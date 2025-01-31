-- Table: car_tracking

-- DROP TABLE car_tracking;

CREATE TABLE car_tracking
(
  car_id character varying(15) NOT NULL,
  period timestamp without time zone NOT NULL,
  longitude character varying(13) NOT NULL,
  latitude character varying(12) NOT NULL,
  speed numeric DEFAULT 0,
  ns character(1) NOT NULL,
  ew character(1) NOT NULL,
  magvar numeric NOT NULL DEFAULT 0,
  heading numeric NOT NULL DEFAULT 0,
  recieved_dt timestamp without time zone NOT NULL,
  gps_valid integer NOT NULL DEFAULT 0,
  from_memory integer DEFAULT 0,
  odometer integer DEFAULT 0,
  p1 numeric DEFAULT 0,
  p2 numeric DEFAULT 0,
  p3 numeric DEFAULT 0,
  p4 numeric DEFAULT 0,
  sensors_in character(1) NOT NULL DEFAULT '0'::bpchar,
  voltage numeric NOT NULL DEFAULT 0,
  sensors_out character(1) NOT NULL DEFAULT '0'::bpchar,
  engine_on character(1) NOT NULL DEFAULT '0'::bpchar,
  lon double precision NOT NULL DEFAULT 0,
  lat double precision NOT NULL DEFAULT 0,
  CONSTRAINT car_tracking_pkey PRIMARY KEY (car_id, period)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE car_tracking OWNER TO polimerplast;

CREATE TRIGGER car_tracking_after_insert
	AFTER INSERT ON car_tracking
	FOR EACH ROW EXECUTE PROCEDURE geo_zone_check();

CREATE TRIGGER car_tracking_before_insert
  BEFORE INSERT ON car_tracking
  FOR EACH ROW EXECUTE PROCEDURE bad_coord_check();
