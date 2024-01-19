--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-01-19 13:00:18

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
-- TOC entry 222 (class 1259 OID 24934)
-- Name: mech_product_component; Type: TABLE; Schema: public; Owner: cmanuser
--

CREATE TABLE public.mech_product_component (
    id integer NOT NULL,
    code character varying(80),
    "createdDt" timestamp without time zone DEFAULT now() NOT NULL,
    "productId" integer,
    "holderId" integer,
    "componentId" integer
);


ALTER TABLE public.mech_product_component OWNER TO cmanuser;

--
-- TOC entry 221 (class 1259 OID 24933)
-- Name: mech_product_component_id_seq; Type: SEQUENCE; Schema: public; Owner: cmanuser
--

CREATE SEQUENCE public.mech_product_component_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mech_product_component_id_seq OWNER TO cmanuser;

--
-- TOC entry 4806 (class 0 OID 0)
-- Dependencies: 221
-- Name: mech_product_component_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cmanuser
--

ALTER SEQUENCE public.mech_product_component_id_seq OWNED BY public.mech_product_component.id;


--
-- TOC entry 4645 (class 2604 OID 24937)
-- Name: mech_product_component id; Type: DEFAULT; Schema: public; Owner: cmanuser
--

ALTER TABLE ONLY public.mech_product_component ALTER COLUMN id SET DEFAULT nextval('public.mech_product_component_id_seq'::regclass);


--
-- TOC entry 4800 (class 0 OID 24934)
-- Dependencies: 222
-- Data for Name: mech_product_component; Type: TABLE DATA; Schema: public; Owner: cmanuser
--

INSERT INTO public.mech_product_component VALUES
	(17, NULL, '2024-01-17 14:11:26.774139', 1, 7, 6),
	(18, NULL, '2024-01-17 18:02:26.074296', 1, 5, 7),
	(19, NULL, '2024-01-17 19:08:38.449932', 1, 8, 5),
	(20, NULL, '2024-01-18 16:04:37.822302', 1, 7, 12),
	(21, NULL, '2024-01-18 16:04:57.044629', 1, 7, 11),
	(22, NULL, '2024-01-18 16:05:08.92011', 1, 7, 10),
	(23, NULL, '2024-01-18 16:05:11.474721', 1, 7, 9),
	(24, NULL, '2024-01-19 10:51:53.537342', 1, 7, 13),
	(25, NULL, '2024-01-19 11:03:33.155338', 1, 7, 14),
	(26, NULL, '2024-01-19 11:21:31.376411', 1, 7, 15);


--
-- TOC entry 4807 (class 0 OID 0)
-- Dependencies: 221
-- Name: mech_product_component_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cmanuser
--

SELECT pg_catalog.setval('public.mech_product_component_id_seq', 26, true);


-- Completed on 2024-01-19 13:00:18

--
-- PostgreSQL database dump complete
--

