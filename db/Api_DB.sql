-- Adminer 4.7.7 PostgreSQL dump

DROP TABLE IF EXISTS "color";
DROP SEQUENCE IF EXISTS color_id_seq;
CREATE SEQUENCE color_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."color" (
    "id" integer DEFAULT nextval('color_id_seq') NOT NULL,
    "type" character varying(100),
    CONSTRAINT "color_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "details";
DROP SEQUENCE IF EXISTS details_id_seq;
CREATE SEQUENCE details_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."details" (
    "id" integer DEFAULT nextval('details_id_seq') NOT NULL,
    "description" character varying(100),
    CONSTRAINT "details_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "kitchen";
DROP SEQUENCE IF EXISTS kitchen_id_seq;
CREATE SEQUENCE kitchen_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."kitchen" (
    "id" integer DEFAULT nextval('kitchen_id_seq') NOT NULL,
    "manufacturer" character varying(50),
    "model" character varying(50),
    "colorid" integer,
    "detailsid" integer,
    "picture" character varying(50),
    CONSTRAINT "kitchen_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "kitchen_colorid_fkey" FOREIGN KEY (colorid) REFERENCES color(id) NOT DEFERRABLE,
    CONSTRAINT "kitchen_detailsid_fkey" FOREIGN KEY (detailsid) REFERENCES details(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "test1";
CREATE TABLE "public"."test1" (
    "id" integer NOT NULL,
    "name" text NOT NULL,
    "lastname" character varying NOT NULL
) WITH (oids = false);

INSERT INTO "test1" ("id", "name", "lastname") VALUES
(1,	'abcd',	'fdfdfd');

DROP TABLE IF EXISTS "users";
DROP SEQUENCE IF EXISTS users_id_seq;
CREATE SEQUENCE users_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."users" (
    "id" integer DEFAULT nextval('users_id_seq') NOT NULL,
    "name" character varying(50),
    "initials" character varying(25),
    "eyecolor" character varying(25),
    "age" integer,
    "guid" character varying(25),
    "email" character varying(50),
    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


-- 2020-05-30 07:35:48.037986+00
