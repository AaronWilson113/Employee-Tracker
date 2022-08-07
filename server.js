const express = require("express");
const mysql = require("mysql2");

const port = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
        host: "localhost",

        user: "root",

        password: "sklOOP1818&",

        database: "company_db"
    },
    console.log("Connected to the company_db database.")
);