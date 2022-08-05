DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    job_role VARCHAR (30),
    manager_name VARCHAR (30),

);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    role_name VARCHAR (30),
    role_salary INT NOT NULL,
    role_department VARCHAR (30),

);

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR (30),

);