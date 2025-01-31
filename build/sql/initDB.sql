CREATE USER luxkor WITH PASSWORD '159753';
CREATE DATABASE luxkor;
GRANT ALL PRIVILEGES ON DATABASE luxkor TO luxkor;

GRANT SELECT ON ALL TABLES IN SCHEMA public TO luxkor;

psql -U postgres -d luxkor -f /usr/share/postgresql/11/contrib/postgis-2.5/postgis.sql
