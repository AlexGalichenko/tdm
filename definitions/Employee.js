const { faker } = require('@faker-js/faker');

class Employee {
    employeeNumber = ({index}) => index + 1;
    firstName = faker.name.firstName();
    lastName = faker.name.lastName();
    extension = faker.phone.number('####');
    email = faker.internet.email();
    officeCode = ({baseRecord}) => baseRecord.officeCode;
    reportsTo = ({data}) => {
        if (data.employees.length === 0) return null;
        return faker.helpers.arrayElement(data.employees.map(e => e.employeeNumber).filter(num => num));
    };
    jobTitle = faker.helpers.arrayElement(['Junior', 'Middle', 'Senior']);
}

module.exports = Employee;
