
const viewDepartments = () => {
    db.query(SELECT * FROM departments)
}

const viewRoles = () => {
    db.query(SELECT * FROM roles)
}

const viewEmployees = () => {
    db.query(SELECT * FROM employees)
};

const 
