--1
SELECT city, country FROM country
INNER JOIN city ON city.country_id = country.country_id ;

-- 2
SELECT  payment_id, first_name, last_name from customer
INNER JOIN payment ON payment.customer_id = customer.customer_id

--3
SELECT  rental_id, first_name, last_name from customer
INNER JOIN rental ON customer.customer_id = rental.customer_id