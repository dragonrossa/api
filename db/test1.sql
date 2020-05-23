-- Adminer 4.7.7 PostgreSQL dump

DROP TABLE IF EXISTS "test1";
CREATE TABLE "public"."test1" (
    "id" integer NOT NULL,
    "name" text NOT NULL,
    "lastname" character varying NOT NULL
) WITH (oids = false);

INSERT INTO "test1" ("id", "name", "lastname") VALUES
(1,	'abcd',	'fdfdfd');

-- 2020-05-23 14:53:06.842172+00
