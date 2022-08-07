DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;


CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    department_name VARCHAR (30)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    role_name VARCHAR (30),
    role_salary INT NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT,
    department_id INT,
    manager_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NUll,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL

);
