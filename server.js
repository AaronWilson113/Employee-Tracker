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
});
