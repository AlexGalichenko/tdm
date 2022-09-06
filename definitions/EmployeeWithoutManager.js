const Employee = require('./Employee');

class EmployeeWithoutManager extends Employee {
    employeeNumber = ({index}) => index + 10000;
    reportsTo = null;
}

module.exports = EmployeeWithoutManager;
