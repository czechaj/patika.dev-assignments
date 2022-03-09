--1
SELECT DISTINCT replacement_cost FROM film;
 
--2
SELECT COUNT(DISTINCT replacement_cost) FROM film;

--3
SELECT title, rating FROM film
WHERE title LIKE 'T%' AND rating = 'G';

--4
SELECT COUNT(country) FROM country
WHERE country ~~ '_____';

--5
SELECT COUNT(city) FROM city 
WHERE city ~~* '%r' 