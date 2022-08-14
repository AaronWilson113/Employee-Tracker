const cTable = require("console.table");
const mysql = require("mysql2");
const inquirer = require("inquirer");


const db = mysql.createConnection(
    {
        host: "localhost",

        user: "root",

        password: "sklOOP1818&",

        database: "company_db"
    },
    console.log("Connected to the company_db database.")
);

db.connect((error) => {
    if (error) throw error;
    console.log("EMPLOYEE TRACKER");
    beginPrompts();
});

const beginPrompts = () => {
    inquirer.prompt([
        {
           type: "list",
           name: "choices",
           message: "what would you like to do?",
           choices: ["View all departments",
                     "View all employees",
                     "View all roles",
                     "Add a department",
                     "Add a role",
                     "Add an employee",
                     "Update an employee role",
                     "Done",
                    ]
        }
    ])
    .then((answers) => {
        const {choices} = answers;

        if (choices === "View all departments") {
            viewDepartments();
        }

        if (choices === "View all employees") {
            viewEmployees();
        }
        
        if (choices === "View all roles") {
            viewRoles();
        }

        if (choices === "Add a department") {
           addDepartments();
        }

        if (choices === "Add a role") {
            addRoles();
        }

        if (choices === "Add an employee") {

        }

        if (choices === "Update an employee role") {

        }

        if (choices === "Done") {
            db.end();
        };
    });
};

const viewDepartments = () => {
    db.query("SELECT departments.id AS id, departments.department_name AS department FROM departments", (err, result) => {
        if (err) throw err;
        console.table(result);
        beginPrompts();
    });
};

const viewRoles = () => {
    db.query("SELECT roles.id, roles.role_name AS title, roles.role_salary AS salary, departments.department_name AS department FROM roles INNER JOIN departments ON roles.department_id = departments.id ", (err, result) => {
        if (err) throw err;
        console.table(result);
        beginPrompts();   
    });
};

const viewEmployees = () => {
    db.query("SELECT employees.id, employees.first_name AS firstname, employees.last_name AS lastname, roles.role_name AS role, roles.role_salary AS salary, departments.department_name AS name FROM employees LEFT JOIN departments ON employees.department_id = departments.id LEFT JOIN roles ON employees.role_id = roles.id", (err, result) => {
        if (err) throw err;
        console.table(result);
        beginPrompts();   
    })
};


addDepartments = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "addDepartment",
            message: "Please enter the name of the department you want to add.",
            validate: (value)=>{ if(value){return true} else {return 'please input your department name to continue'}},
        }
        
    ]) 
    .then(response => {
        db.query(`INSERT INTO departments (department_name) VALUES (?)`, [response.addDepartment], (err, result) => {
            if (err) throw err;
            viewDepartments();
        });
    });
};

async function addRoles () {
   
    const dep = await db.promise().query("SELECT * FROM departments");

    const depChoices = dep[0].map(({ id, name}) => ({ name: `${name}`, value: id}));

    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Please write the name for your new role"
            },
            {
                type: "number",
                name: "salary",
                message: "Please input the salary for your new role"
            },
            {
                type: "list",
                name: "department",
                message: "Please choose a department for your new role",
                choices: depChoices
            }
        ]).then(response => {

            const role_name = response.name;
            const role_salary = response.salary;
            const department_id = response.department;

            const params = [];
        })
};