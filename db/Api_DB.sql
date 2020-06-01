-- Adminer 4.7.7 PostgreSQL dump

DROP TABLE IF EXISTS "battery";
DROP SEQUENCE IF EXISTS battery_id_seq;
CREATE SEQUENCE battery_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."battery" (
    "id" integer DEFAULT nextval('battery_id_seq') NOT NULL,
    "title" character varying(150),
    "chargingid" integer,
    "talk_time" character varying(150),
    "music_play" character varying(150),
    CONSTRAINT "battery_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "battery_chargingid_fkey" FOREIGN KEY (chargingid) REFERENCES charging(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "body";
DROP SEQUENCE IF EXISTS body_id_seq;
CREATE SEQUENCE body_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."body" (
    "id" integer DEFAULT nextval('body_id_seq') NOT NULL,
    "dimension" character varying(150),
    "weight" character varying(150),
    "build" character varying(100),
    "simid" integer,
    CONSTRAINT "body_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "body_simid_fkey" FOREIGN KEY (simid) REFERENCES sim(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "charging";
DROP SEQUENCE IF EXISTS charging_id_seq;
CREATE SEQUENCE charging_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."charging" (
    "id" integer DEFAULT nextval('charging_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "charging_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "color";
DROP SEQUENCE IF EXISTS color_id_seq;
CREATE SEQUENCE color_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."color" (
    "id" integer DEFAULT nextval('color_id_seq') NOT NULL,
    "type" character varying(100),
    CONSTRAINT "color_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "comms";
DROP SEQUENCE IF EXISTS comms_id_seq;
CREATE SEQUENCE comms_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."comms" (
    "id" integer DEFAULT nextval('comms_id_seq') NOT NULL,
    "wlan" character varying(150),
    "bluetooth" character varying(150),
    "gps" character varying(150),
    "nfc" character varying(150),
    "radio" character varying(150),
    "usb" character varying(150),
    CONSTRAINT "comms_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "details";
DROP SEQUENCE IF EXISTS details_id_seq;
CREATE SEQUENCE details_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."details" (
    "id" integer DEFAULT nextval('details_id_seq') NOT NULL,
    "description" character varying(100),
    CONSTRAINT "details_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "display";
DROP SEQUENCE IF EXISTS display_id_seq;
CREATE SEQUENCE display_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."display" (
    "id" integer DEFAULT nextval('display_id_seq') NOT NULL,
    "type" character varying(150),
    "size" character varying(150),
    "resolution" character varying(150),
    "protectionid" integer,
    CONSTRAINT "display_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "display_protectionid_fkey" FOREIGN KEY (protectionid) REFERENCES protection(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "dual";
DROP SEQUENCE IF EXISTS dual_id_seq;
CREATE SEQUENCE dual_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."dual" (
    "id" integer DEFAULT nextval('dual_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "dual_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "features";
DROP SEQUENCE IF EXISTS features_id_seq;
CREATE SEQUENCE features_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."features" (
    "id" integer DEFAULT nextval('features_id_seq') NOT NULL,
    "sensorsid" integer,
    CONSTRAINT "features_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "features_sensorsid_fkey" FOREIGN KEY (sensorsid) REFERENCES sensors(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "fourg_bands";
DROP SEQUENCE IF EXISTS fourg_bands_id_seq;
CREATE SEQUENCE fourg_bands_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."fourg_bands" (
    "id" integer DEFAULT nextval('fourg_bands_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "fourg_bands_pkey" PRIMARY KEY ("id")
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


DROP TABLE IF EXISTS "launch";
DROP SEQUENCE IF EXISTS launch_id_seq;
CREATE SEQUENCE launch_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."launch" (
    "id" integer DEFAULT nextval('launch_id_seq') NOT NULL,
    "announced" character varying(150),
    "status" character varying(150),
    CONSTRAINT "launch_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "main_camera";
DROP SEQUENCE IF EXISTS main_camera_id_seq;
CREATE SEQUENCE main_camera_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."main_camera" (
    "id" integer DEFAULT nextval('main_camera_id_seq') NOT NULL,
    "tripleid" integer,
    "features" character varying(150),
    "video" character varying(150),
    CONSTRAINT "main_camera_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "main_camera_tripleid_fkey" FOREIGN KEY (tripleid) REFERENCES triple(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "memory";
DROP SEQUENCE IF EXISTS memory_id_seq;
CREATE SEQUENCE memory_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."memory" (
    "id" integer DEFAULT nextval('memory_id_seq') NOT NULL,
    "cardslot" character varying(20),
    "internal" character varying(250),
    CONSTRAINT "memory_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "misc";
DROP SEQUENCE IF EXISTS misc_id_seq;
CREATE SEQUENCE misc_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."misc" (
    "id" integer DEFAULT nextval('misc_id_seq') NOT NULL,
    "colors" character varying(150),
    "models" character varying(150),
    "sar" character varying(150),
    "sar_eu" character varying(150),
    "price" character varying(100),
    CONSTRAINT "misc_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "network";
DROP SEQUENCE IF EXISTS network_id_seq;
CREATE SEQUENCE network_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."network" (
    "id" integer DEFAULT nextval('network_id_seq') NOT NULL,
    "technologyid" integer,
    "twog_bandsid" integer,
    "threeg_bandsid" integer,
    "fourg_bandsid" integer,
    "speed" character varying(150),
    CONSTRAINT "network_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "network_fourg_bandsid_fkey" FOREIGN KEY (fourg_bandsid) REFERENCES fourg_bands(id) NOT DEFERRABLE,
    CONSTRAINT "network_technologyid_fkey" FOREIGN KEY (technologyid) REFERENCES technology(id) NOT DEFERRABLE,
    CONSTRAINT "network_threeg_bandsid_fkey" FOREIGN KEY (threeg_bandsid) REFERENCES threeg_bands(id) NOT DEFERRABLE,
    CONSTRAINT "network_twog_bandsid_fkey" FOREIGN KEY (twog_bandsid) REFERENCES twog_bands(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "performance";
DROP SEQUENCE IF EXISTS performance_id_seq;
CREATE SEQUENCE performance_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."performance" (
    "id" integer DEFAULT nextval('performance_id_seq') NOT NULL,
    "title" character varying(50),
    CONSTRAINT "performance_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "phone";
DROP SEQUENCE IF EXISTS phone_id_seq;
CREATE SEQUENCE phone_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."phone" (
    "id" integer DEFAULT nextval('phone_id_seq') NOT NULL,
    "name" character varying(250),
    "released" character varying(250),
    "weight" character varying(50),
    "thickness" character varying(50),
    "guid" character varying(100),
    "os" character varying(100),
    "storage" character varying(100),
    "size" character varying(50),
    "camera" character varying(50),
    "memoryid" integer,
    "batteryid" integer,
    "networkid" integer,
    "launchid" integer,
    "bodyid" integer,
    "displayid" integer,
    "platformid" integer,
    "main_cameraid" integer,
    "selfie_cameraid" integer,
    "soundid" integer,
    "commsid" integer,
    "featuresid" integer,
    "miscid" integer,
    "testsid" integer,
    CONSTRAINT "phone_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "phone_batteryid_fkey" FOREIGN KEY (batteryid) REFERENCES battery(id) NOT DEFERRABLE,
    CONSTRAINT "phone_bodyid_fkey" FOREIGN KEY (bodyid) REFERENCES body(id) NOT DEFERRABLE,
    CONSTRAINT "phone_commsid_fkey" FOREIGN KEY (commsid) REFERENCES comms(id) NOT DEFERRABLE,
    CONSTRAINT "phone_displayid_fkey" FOREIGN KEY (displayid) REFERENCES display(id) NOT DEFERRABLE,
    CONSTRAINT "phone_featuresid_fkey" FOREIGN KEY (featuresid) REFERENCES features(id) NOT DEFERRABLE,
    CONSTRAINT "phone_launchid_fkey" FOREIGN KEY (launchid) REFERENCES launch(id) NOT DEFERRABLE,
    CONSTRAINT "phone_main_cameraid_fkey" FOREIGN KEY (main_cameraid) REFERENCES main_camera(id) NOT DEFERRABLE,
    CONSTRAINT "phone_memoryid_fkey" FOREIGN KEY (memoryid) REFERENCES memory(id) NOT DEFERRABLE,
    CONSTRAINT "phone_miscid_fkey" FOREIGN KEY (miscid) REFERENCES misc(id) NOT DEFERRABLE,
    CONSTRAINT "phone_networkid_fkey" FOREIGN KEY (networkid) REFERENCES network(id) NOT DEFERRABLE,
    CONSTRAINT "phone_platformid_fkey" FOREIGN KEY (platformid) REFERENCES platform(id) NOT DEFERRABLE,
    CONSTRAINT "phone_selfie_cameraid_fkey" FOREIGN KEY (selfie_cameraid) REFERENCES selfie_camera(id) NOT DEFERRABLE,
    CONSTRAINT "phone_soundid_fkey" FOREIGN KEY (soundid) REFERENCES sound(id) NOT DEFERRABLE,
    CONSTRAINT "phone_testsid_fkey" FOREIGN KEY (testsid) REFERENCES tests(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "platform";
DROP SEQUENCE IF EXISTS platform_id_seq;
CREATE SEQUENCE platform_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."platform" (
    "id" integer DEFAULT nextval('platform_id_seq') NOT NULL,
    "os" character varying(100),
    "chipset" character varying(150),
    "cpu" character varying(150),
    "gpu" character varying(150),
    CONSTRAINT "platform_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "protection";
DROP SEQUENCE IF EXISTS protection_id_seq;
CREATE SEQUENCE protection_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."protection" (
    "id" integer DEFAULT nextval('protection_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "protection_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "selfie_camera";
DROP SEQUENCE IF EXISTS selfie_camera_id_seq;
CREATE SEQUENCE selfie_camera_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."selfie_camera" (
    "id" integer DEFAULT nextval('selfie_camera_id_seq') NOT NULL,
    "dualid" integer,
    "features" character varying(150),
    "video" character varying(150),
    CONSTRAINT "selfie_camera_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "selfie_camera_dualid_fkey" FOREIGN KEY (dualid) REFERENCES dual(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "sensors";
DROP SEQUENCE IF EXISTS sensors_id_seq;
CREATE SEQUENCE sensors_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."sensors" (
    "id" integer DEFAULT nextval('sensors_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "sensors_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "sim";
DROP SEQUENCE IF EXISTS sim_id_seq;
CREATE SEQUENCE sim_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."sim" (
    "id" integer DEFAULT nextval('sim_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "sim_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "sound";
DROP SEQUENCE IF EXISTS sound_id_seq;
CREATE SEQUENCE sound_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."sound" (
    "id" integer DEFAULT nextval('sound_id_seq') NOT NULL,
    "loudspeaker" character varying(150),
    "jack_3_5mm" character varying(20),
    CONSTRAINT "sound_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "technology";
DROP SEQUENCE IF EXISTS technology_id_seq;
CREATE SEQUENCE technology_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."technology" (
    "id" integer DEFAULT nextval('technology_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "technology_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "test1";
CREATE TABLE "public"."test1" (
    "id" integer NOT NULL,
    "name" text NOT NULL,
    "lastname" character varying NOT NULL
) WITH (oids = false);

INSERT INTO "test1" ("id", "name", "lastname") VALUES
(1,	'abcd',	'fdfdfd');

DROP TABLE IF EXISTS "tests";
DROP SEQUENCE IF EXISTS tests_id_seq;
CREATE SEQUENCE tests_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."tests" (
    "id" integer DEFAULT nextval('tests_id_seq') NOT NULL,
    "performanceid" integer,
    "display" character varying(150),
    "camera" character varying(150),
    "loudspeaker" character varying(150),
    "audio_quality" character varying(150),
    "battery_life" character varying(150),
    CONSTRAINT "tests_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "tests_performanceid_fkey" FOREIGN KEY (performanceid) REFERENCES performance(id) NOT DEFERRABLE
) WITH (oids = false);


DROP TABLE IF EXISTS "threeg_bands";
DROP SEQUENCE IF EXISTS threeg_bands_id_seq;
CREATE SEQUENCE threeg_bands_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."threeg_bands" (
    "id" integer DEFAULT nextval('threeg_bands_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "threeg_bands_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "triple";
DROP SEQUENCE IF EXISTS triple_id_seq;
CREATE SEQUENCE triple_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."triple" (
    "id" integer DEFAULT nextval('triple_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "triple_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


DROP TABLE IF EXISTS "twog_bands";
DROP SEQUENCE IF EXISTS twog_bands_id_seq;
CREATE SEQUENCE twog_bands_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 START 1 CACHE 1;

CREATE TABLE "public"."twog_bands" (
    "id" integer DEFAULT nextval('twog_bands_id_seq') NOT NULL,
    "title" character varying(150),
    CONSTRAINT "twog_bands_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


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


-- 2020-06-01 09:14:16.571878+00
