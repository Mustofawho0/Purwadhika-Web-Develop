use tictanic;

select * from passangers;

select PassengerId, Name, Sex, Cabin, Age from tictanic.passangers
where Survived = 0;