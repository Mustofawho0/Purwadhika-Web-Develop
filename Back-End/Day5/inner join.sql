use sakila;

SELECT*FROM customer;
SELECT*FROM payment;SELECT
  payment.customer_id,
  SUM(payment.amount) as total_amount,
  COUNT(payment.staff_id) as total_staff,
  payment.payment_date,
  customer.first_name,
  customer.last_name,
  customer.email
FROM
  payment
  INNER JOIN customer ON payment.payment_id = customer.customer_id
GROUP BY
  payment.customer_id;