
-- ******************* update 06/09/2024 10:47:29 ******************

		ALTER TABLE public.doc_orders_t_tmp_products ADD COLUMN price_round bool;


-- ******************* update 06/09/2024 11:04:00 ******************

		ALTER TABLE public.doc_orders_t_products ADD COLUMN price_round bool;



-- ******************* update 06/09/2024 13:24:39 ******************

		ALTER TABLE public.doc_orders_t_products ADD COLUMN price_round bool;



-- ******************* update 06/09/2024 13:24:52 ******************

		--ALTER TABLE public.doc_orders_t_products ADD COLUMN price_round bool;
		ALTER TABLE public.doc_orders_t_tmp_products ADD COLUMN price_round bool;



-- ******************* update 06/09/2024 13:25:07 ******************

		--ALTER TABLE public.doc_orders_t_products ADD COLUMN price_round bool;
		ALTER TABLE public.doc_orders_t_tmp_products drop COLUMN price_roud;



-- ******************* update 06/09/2024 13:25:15 ******************

		--ALTER TABLE public.doc_orders_t_products ADD COLUMN price_round bool;
		ALTER TABLE public.doc_orders_t_products drop COLUMN price_roud;



-- ******************* update 09/09/2024 14:16:12 ******************
	-- ********** Adding new table from model **********
	CREATE TABLE public.doc_orders_t_tmp_prod_batches
	(view_id  varchar(32) NOT NULL,line_number int NOT NULL,login_id int,batch_date date NOT NULL,batch_num text NOT NULL,prod_name text,quant int,ext_id  varchar(36),CONSTRAINT doc_orders_t_tmp_prod_batches_pkey PRIMARY KEY (view_id,line_number)
	);



-- ******************* update 09/09/2024 14:16:28 ******************
ALTER TABLE public.doc_orders_t_tmp_prod_batches OWNER TO polimerplast;


-- ******************* update 09/09/2024 14:17:33 ******************
DROP TABLE public.doc_orders_t_tmp_prod_batches;


-- ******************* update 09/09/2024 14:18:33 ******************

CREATE TABLE public.doc_orders_t_tmp_prod_batches
(view_id  varchar(32) NOT NULL,line_number int NOT NULL,login_id int,
	batch_descr text NOT NULL
	,ext_id  varchar(36),
	CONSTRAINT doc_orders_t_tmp_prod_batches_pkey PRIMARY KEY (view_id,line_number)
);
ALTER TABLE public.doc_orders_t_tmp_prod_batches OWNER TO polimerplast;



-- ******************* update 09/09/2024 14:22:16 ******************

CREATE TABLE public.doc_orders_t_prod_batches
(view_id  varchar(32) NOT NULL,line_number int NOT NULL,login_id int,
	batch_descr text NOT NULL
	,ext_id  varchar(36),
	CONSTRAINT doc_orders_t_prod_batches_pkey PRIMARY KEY (view_id,line_number)
);
ALTER TABLE public.doc_orders_t_prod_batches OWNER TO polimerplast;



-- ******************* update 09/09/2024 15:52:32 ******************
drop table doc_orders_t_prod_batches;

	-- ********** Adding new table from model **********
	CREATE TABLE public.doc_orders_t_prod_batches
	(doc_id int NOT NULL REFERENCES doc_orders(id),line_number int NOT NULL,batch_descr text NOT NULL,ext_id  varchar(36) NOT NULL,CONSTRAINT doc_orders_t_prod_batches_pkey PRIMARY KEY (doc_id,line_number)
	);
	ALTER TABLE public.doc_orders_t_prod_batches OWNER TO polimerplast;



-- ******************* update 12/09/2024 14:14:14 ******************
ALTER TABLE public.doc_orders_t_tmp_products ADD COLUMN price_round bool;


-- ******************* update 12/09/2024 14:14:25 ******************
ALTER TABLE public.doc_orders_t_products ADD COLUMN price_round bool;


-- ******************* update 12/09/2024 14:15:56 ******************
DROP TABLE public.doc_orders_t_tmp_prod_batches CASCADE;

CREATE TABLE public.doc_orders_t_tmp_prod_batches
(view_id  varchar(32) NOT NULL,line_number int NOT NULL,login_id int,
	batch_descr text NOT NULL
	,ext_id  varchar(36),
	CONSTRAINT doc_orders_t_tmp_prod_batches_pkey PRIMARY KEY (view_id,line_number)
);
ALTER TABLE public.doc_orders_t_tmp_prod_batches OWNER TO polimerplast;

