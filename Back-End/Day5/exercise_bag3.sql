use sakila;

select first_name, last_name from actor;

select actor_id, first_name, last_name from actor where first_name like 'joe%';

select address, district, city_id from address where district in ('california', 'alberta','mekka');

select count(last_name) as name_wood from actor where last_name like '%wood%';

select * from payment;
select sum(amount) as total_amount, customer_id from payment
group by customer_id
having total_amount > 100
order by total_amount desc;

select * from payment;
select * from customer;
SELECT
    payment.customer_id,
    SUM(payment.amount) as total_amount,
    customer.first_name,
    customer.last_name,
    customer.email
FROM
    payment
INNER JOIN customer ON payment.payment_id = customer.customer_id
GROUP BY payment.customer_id;
