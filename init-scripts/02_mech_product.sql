--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0
-- Dumped by pg_dump version 16.0

-- Started on 2024-01-19 12:58:26

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
-- TOC entry 220 (class 1259 OID 24918)
-- Name: mech_product; Type: TABLE; Schema: public; Owner: cmanuser
--

CREATE TABLE public.mech_product (
    id integer NOT NULL,
    code character varying(80) NOT NULL,
    "createdDt" timestamp without time zone DEFAULT now() NOT NULL,
    title character varying(250) NOT NULL,
    description text
);


ALTER TABLE public.mech_product OWNER TO cmanuser;

--
-- TOC entry 219 (class 1259 OID 24917)
-- Name: mech_product_id_seq; Type: SEQUENCE; Schema: public; Owner: cmanuser
--

CREATE SEQUENCE public.mech_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.mech_product_id_seq OWNER TO cmanuser;

--
-- TOC entry 4805 (class 0 OID 0)
-- Dependencies: 219
-- Name: mech_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: cmanuser
--

ALTER SEQUENCE public.mech_product_id_seq OWNED BY public.mech_product.id;


--
-- TOC entry 4645 (class 2604 OID 24921)
-- Name: mech_product id; Type: DEFAULT; Schema: public; Owner: cmanuser
--

ALTER TABLE ONLY public.mech_product ALTER COLUMN id SET DEFAULT nextval('public.mech_product_id_seq'::regclass);


--
-- TOC entry 4799 (class 0 OID 24918)
-- Dependencies: 220
-- Data for Name: mech_product; Type: TABLE DATA; Schema: public; Owner: cmanuser
--

INSERT INTO public.mech_product VALUES
	(1, 'P001', '2024-01-15 20:24:48.098569', 'Продукт 001', NULL),
	(4, 'P002', '2024-01-15 20:37:03.187615', 'Продукт 002', NULL),
	(5, 'P003', '2024-01-15 20:37:52.410061', 'Продукт 003', 'Описание Продукта'),
	(7, 'P004', '2024-01-16 06:09:23.19177', 'Продукт 004', 'Описание Продукта'),
	(9, 'P005', '2024-01-16 06:50:02.413123', 'Продукт 005', 'Описание Продукта'),
	(8, 'P004-1', '2024-01-16 06:30:18.573341', 'Продукт 004-1', 'Описание Продукта'),
	(11, 'P005-1', '2024-01-16 06:54:13.853956', 'Продукт 005-1', 'Описание Продукта'),
	(12, 'P005-2', '2024-01-16 06:54:19.665357', 'Продукт 005-2', 'Описание Продукта'),
	(13, 'P005-3', '2024-01-16 06:54:22.637112', 'Продукт 005-3', 'Описание Продукта');


--
-- TOC entry 4806 (class 0 OID 0)
-- Dependencies: 219
-- Name: mech_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: cmanuser
--

SELECT pg_catalog.setval('public.mech_product_id_seq', 15, true);


-- Completed on 2024-01-19 12:58:26

--
-- PostgreSQL database dump complete
--

