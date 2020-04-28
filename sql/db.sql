USE postgres;

CREATE TABLE employees(
    id serial primary key,
    name varchar(100) not null,
    surname varchar(100) not null,
    user_key int  not null,
    antiquity int  not null
);