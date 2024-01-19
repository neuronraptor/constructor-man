--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-01-19 12:57:04

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
-- TOC entry 216 (class 1259 OID 24848)
-- Name: mech_type; Type: TABLE; Schema: public; Owner: cmanuser
--

CREATE TABLE public.mech_type (
    id integer NOT NULL,
    code character varying(80) NOT NULL,
    "createdDt" timestamp without time zone DEFAULT now() NOT NULL,
    title character varying(250) NOT NULL,
    part_no character varying(40) NOT NULL,
    parent_id integer
);


ALTER TABLE public.mech_type OWNER TO cmanuser;

--
-- TOC entry 215 (class 1259 OID 24847)
-- Name: mech_type_id_seq; Type: SEQUENCE; Schema: public; Owner: cmanuser
--

CREATE SEQUENCE public.mech_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mech_type_id_seq OWNER TO cmanuser;

--
-- TOC entry 4803 (class 0 OID 0)
-- Dependencies: 215
-- Name: mech_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cmanuser
--

ALTER SEQUENCE public.mech_type_id_seq OWNED BY public.mech_type.id;


--
-- TOC entry 4645 (class 2604 OID 24851)
-- Name: mech_type id; Type: DEFAULT; Schema: public; Owner: cmanuser
--

ALTER TABLE ONLY public.mech_type ALTER COLUMN id SET DEFAULT nextval('public.mech_type_id_seq'::regclass);


--
-- TOC entry 4797 (class 0 OID 24848)
-- Dependencies: 216
-- Data for Name: mech_type; Type: TABLE DATA; Schema: public; Owner: cmanuser
--

INSERT INTO public.mech_type VALUES
	(5, 'Engine02', '2024-01-16 07:59:28.610583', 'Двигатель2', 'PN-ENGN-0002', NULL),
	(7, 'Engine03', '2024-01-16 08:12:54.295237', 'Двигатель3', 'PN-ENGN-0003', NULL),
	(10, 'Engine04', '2024-01-16 10:23:40.126811', 'Двигатель4', 'PN-ENGN-0004', NULL),
	(12, 'Cylinder002', '2024-01-17 13:55:52.659817', 'Цилиндр типа 2', 'PN-CLNDR-0002', NULL),
	(2, 'Engine01', '2024-01-16 07:53:37.732097', 'Двигатель', 'PN-ENGN-0001', NULL),
	(11, 'Cylinder001', '2024-01-17 13:54:11.709762', 'Цилиндр типа 001', 'PN-CLNDR-0001', NULL),
	(14, 'ENGBLK0003', '2024-01-17 13:59:59.582131', 'Блок двигателя 03', 'PN-ENGBLK-0003', NULL),
	(13, 'ENGBLK0002', '2024-01-17 13:59:39.715551', 'Блок двигателя 02', 'PN-ENGBLK-0002', NULL),
	(15, 'ENGBLK0001', '2024-01-17 14:00:12.094764', 'Блок двигателя 01', 'PN-ENGBLK-0001', NULL),
	(16, 'AUTO0001', '2024-01-17 19:00:09.108769', 'Автомобиль легковой 01', 'PN-AUTO-0001', NULL);


--
-- TOC entry 4804 (class 0 OID 0)
-- Dependencies: 215
-- Name: mech_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cmanuser
--

SELECT pg_catalog.setval('public.mech_type_id_seq', 16, true);


-- Completed on 2024-01-19 12:57:05

--
-- PostgreSQL database dump complete
--

