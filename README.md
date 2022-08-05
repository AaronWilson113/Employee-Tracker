# Employee-Tracker

1. Write the schema.sql, and add the console.table package 
    CREATE TABLE department(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(30)
    )

    CREATE TABLE employee(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(30),
        last_name VARCHAR(30),
        role_id INT,
        manager_id INT,
        FOREIGN KEY (role_id) REFERENCES ROLE (id) ON DELETE SET NULL,
        FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
    )
2. Create some seed data -> seeds.sql
    make up some roles, some general info, stuff we can bite off. 
3. Determine the queries need for the application. 
    a. View all departments
    b. View all roles
    c. View all employees
    d. add role
    e. add department
    f. add employee
    g. update employee role 

    maybe make a function for each query inside of a helper file. 
    ex
    const loadDepartments = () => {
        db.query('SELECT * FROM department', (err, result =>)
        )
    }

    when adding we will need to use prepared statements.

    ex

    const addRole = (title, salary, deparment) => {
        db.query('INSERT INTO role(title, salary, department_id) VALUES (?, ?, ?'), [title, salary, department])
    }

4. Build out the inquirer prompts. 
    Look back at chall 9+10 for references in general but especially for this. 

    Prompt menu then 
    run function based off response, the function may ask for more info then run a query or just run a query 

5.