--1
SELECT COUNT(length) FROM film
WHERE length > (
	SELECT AVG(length) FROM film	
 );

--2
SELECT COUNT(*) FROM film
WHERE rental_rate = (
	SELECT max(rental_rate) FROM film
);

--3
SELECT * FROM film
WHERE rental_rate = (SELECT MIN(rental_rate) FROM film) AND replacement_cost =(SELECT MIN(replacement_cost) FROM film)
;

--4
SELECT payment.customer_id, first_name, last_name, COUNT(payment.customer_id) AS payment_count FROM payment 
LEFT JOIN customer ON payment.customer_id = customer.customer_id
GROUP BY payment.customer_id, first_name, last_name
ORDER BY payment_count DESC;