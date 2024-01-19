--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-01-19 12:59:26

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 24859)
-- Name: mech_component; Type: TABLE; Schema: public; Owner: cmanuser
--

CREATE TABLE public.mech_component (
    id integer NOT NULL,
    code character varying(80) NOT NULL,
    "createdDt" timestamp without time zone DEFAULT now() NOT NULL,
    "serialNo" character varying(40) NOT NULL,
    "typeId" integer NOT NULL
);


ALTER TABLE public.mech_component OWNER TO cmanuser;

--
-- TOC entry 217 (class 1259 OID 24858)
-- Name: mech_component_id_seq; Type: SEQUENCE; Schema: public; Owner: cmanuser
--

CREATE SEQUENCE public.mech_component_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mech_component_id_seq OWNER TO cmanuser;

--
-- TOC entry 4802 (class 0 OID 0)
-- Dependencies: 217
-- Name: mech_component_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cmanuser
--

ALTER SEQUENCE public.mech_component_id_seq OWNED BY public.mech_component.id;


--
-- TOC entry 4645 (class 2604 OID 24862)
-- Name: mech_component id; Type: DEFAULT; Schema: public; Owner: cmanuser
--

ALTER TABLE ONLY public.mech_component ALTER COLUMN id SET DEFAULT nextval('public.mech_component_id_seq'::regclass);


--
-- TOC entry 4796 (class 0 OID 24859)
-- Dependencies: 218
-- Data for Name: mech_component; Type: TABLE DATA; Schema: public; Owner: cmanuser
--

INSERT INTO public.mech_component VALUES
	(3, 'CMPNT-001', '2024-01-17 13:03:24.434162', 'SN CMPNT-001', 2),
	(5, 'CMPNT-002', '2024-01-17 13:53:04.486857', 'SN CMPNT-002', 5),
	(6, 'PN-CLNDR-0001', '2024-01-17 13:55:14.567397', 'SN-CLNDR-0001', 11),
	(7, 'PN-ENGBLK-0001', '2024-01-17 14:04:27.420181', 'SN-ENGBLK-0001', 15),
	(8, 'PN-AUTO-0001', '2024-01-17 19:03:33.841579', 'SN-AUTO-0001', 16),
	(9, 'SN-CLNDR-0001', '2024-01-18 16:03:21.718625', 'SN-CLNDR-0002', 11),
	(10, 'SN-CLNDR-0003', '2024-01-18 16:03:41.167402', 'SN-CLNDR-0003', 11),
	(11, 'SN-CLNDR-0004', '2024-01-18 16:03:47.266814', 'SN-CLNDR-0004', 11),
	(12, 'SN-CLNDR-0005', '2024-01-18 16:03:52.402575', 'SN-CLNDR-0005', 11),
	(13, 'SN-CLNDR-0006', '2024-01-19 10:42:47.977538', 'SN-CLNDR-0006', 11),
	(14, 'SN-CLNDR-0007', '2024-01-19 11:02:44.314254', 'SN-CLNDR-0007', 11),
	(15, 'SN-CLNDR-0008', '2024-01-19 11:21:21.553357', 'SN-CLNDR-0008', 11);


--
-- TOC entry 4803 (class 0 OID 0)
-- Dependencies: 217
-- Name: mech_component_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cmanuser
--

SELECT pg_catalog.setval('public.mech_component_id_seq', 15, true);


-- Completed on 2024-01-19 12:59:26

--
-- PostgreSQL database dump complete
--

