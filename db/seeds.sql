INSERT INTO departments (id, department_name)
VALUES (001, "Product Management"),
       (002, "Engineering Department");

INSERT INTO roles (id, role_name, role_salary, role_department)
VALUES (001, "Engineer", 100000, 002),
       (002, "Senior Engineer", 102000, 002),
       (003, "Product Manager" , 100400, 001);

INSERT INTO employees (id, first_name, last_name, job_role, manager_id)
VALUES (001, "Stephen", "Winslow", 002, null),
       (002, "Ethan", "Winslow", 001, 001),
       (003, "Al", "Rogers", 003, null);