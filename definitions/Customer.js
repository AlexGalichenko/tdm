const { faker } = require('@faker-js/faker');

class Customer {
    customerNumber = ({index}) => index + 1;
    customerName = ({record}) => record.contactFirstName + ' ' + record.contactLastName;
    contactLastName = faker.name.firstName();
    contactFirstName = faker.name.lastName();
    phone = faker.phone.number('###-###-###');
    addressLine1 = faker.address.streetAddress();
    addressLine2 = faker.address.secondaryAddress();
    city = faker.address.city();
    state = faker.address.state();
    postalCode = faker.address.zipCode();
    country = faker.address.country().slice(0, 50);
    salesRepEmployeeNumber = ({data}) => faker.helpers.arrayElement(data.employees.map(e => e.employeeNumber));
    creditLimit = faker.datatype.number(10000);
}

module.exports = Customer;
