use tictanic;
select * from passangers;
select count(*) as Survived, Survived from passangers where Survived = 1 group by Survived;

select * from passangers where Name like '%braund%';

select count(*) as Total_Survived, Sex from passangers where Survived = 1 group by Sex;

select count(*) as Total_Survived, Survived, Pclass from passangers where Survived = 1  group by Pclass;

select count(*) as Total_Survived, Pclass from passangers where Survived = 0actor_idactor group by Pclass;