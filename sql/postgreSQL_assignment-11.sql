--1
SELECT first_name from actor
UNION
SELECT first_name FROM customer;

--2
SELECT first_name from actor
INTERSECT
SELECT first_name FROM customer;

--3
SELECT first_name from actor
EXCEPT
SELECT first_name FROM customer;

--4 - intersectin mantigi geregi all ile sorgulanmasina gerek yok
--4.1
SELECT first_name from actor
UNION ALL
SELECT first_name FROM customer;

--4.2
SELECT first_name from actor
EXCEPT ALL
SELECT first_name FROM customer;
