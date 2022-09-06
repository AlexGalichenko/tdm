const { faker } = require('@faker-js/faker');

let products = null;

class OrderDetails {
    orderNumber = ({baseRecord}) => baseRecord.orderNumber;
    productCode = ({data}) => {
        if (!products) products = data.products.map(e => e.productCode);
        return faker.helpers.arrayElement(products);
    };
    quantityOrdered = faker.datatype.number(10);
    priceEach = faker.datatype.float({ max: 1000 });
    orderLineNumber = ({index}) => index + 1;
}

module.exports = OrderDetails;
