INSERT INTO departments (id, department_name)
VALUES (001, "Product Management"),
       (002, "Engineering Department"),
       (003, "Swag Department"),
       (004, "Confused Department"),
       (005, "Department for Departments");
       

INSERT INTO roles (id, role_name, role_salary, department_id)
VALUES (001, "Engineer", 100000, 002),
       (002, "Senior Engineer", 102000, 002),
       (003, "Product Manager" , 100400, 001),
       (004, "Project Manager", 10000, 003),
       (005, "Project Guy", 2000, 004),

INSERT INTO employees (first_name, last_name, role_id, manager_id, manager)
VALUES ("Stephen", "Winslow", 002, null, 1),
       ("Ethan", "Winslow", 001, 001, 0),
       ("Al", "Rogers", 003, 001, 0),
       ("Dave", "Daveson", 004, null, 1),
       ("Captain", "Crunch", 005, 004, 0)