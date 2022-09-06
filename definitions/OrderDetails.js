const { faker } = require('@faker-js/faker');

let products = null;

class OrderDetails {
    orderNumber = ({baseRecord}) => baseRecord.orderNumber;
    productCode = ({data}) => {
        if (!products) products = data.products.map(e => e.productCode);
        return faker.helpers.arrayElement(products);
    };
    quantityOrdered = faker.datatype.number({min: 1, max: 10});
    priceEach = faker.datatype.float({ max: 1000 });
    orderLineNumber = faker.datatype.number(50);
}

module.exports = OrderDetails;
