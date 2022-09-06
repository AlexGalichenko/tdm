const { faker } = require('@faker-js/faker');

class Order {
    orderNumber = ({index}) => index + 1;
    orderDate = faker.date.soon(1);
    requiredDate = faker.date.soon(3);
    shippedDate = faker.date.soon(5);
    status = faker.helpers.arrayElement(['ORDERED', 'SHIPPED', 'CANCELLED']);
    comments = faker.lorem.text();
    customerNumber = ({baseRecord}) => baseRecord.customerNumber;
}

module.exports = Order;
