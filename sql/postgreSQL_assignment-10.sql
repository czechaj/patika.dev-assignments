--1
SELECT city.city, country.country FROM city
LEFT JOIN country ON city.country_id = country.country_id

--2
SELECT payment_id, first_name, last_name FROM customer
RIGHT JOIN payment ON customer.customer_id = payment.customer_id 

--3
SELECT rental_id, first_name, last_name FROM customer
FULL OUTER JOIN rental ON rental.customer_id = customer.customer_id

