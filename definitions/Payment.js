const { faker } = require('@faker-js/faker');

class Payment {
    customerNumber = ({baseRecord}) => baseRecord.customerNumber;
    checkNumber = ({index}) => index + 1;
    paymentDate = faker.date.soon(1);
    amount = faker.datatype.float({max: 1000})
}

module.exports = Payment;
