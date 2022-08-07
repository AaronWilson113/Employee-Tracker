INSERT INTO departments (id, department_name)
VALUES (001, "Product Management"),
       (002, "Engineering Department");

INSERT INTO roles (id, role_name, role_salary, role_department)
VALUES (001, "Engineer", 100000, 002),
       (002, "Senior Engineer", 102000, 002),
       (003, "Product Manager" , 100400, 001);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Stephen", "Winslow", 002, null),
       ("Ethan", "Winslow", 001, 001),
       ("Al", "Rogers", 003, null);