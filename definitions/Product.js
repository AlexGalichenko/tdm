const { faker } = require('@faker-js/faker');

class Product {
    productCode = ({index}) => index + 1;
    productName = ({baseRecord}) => faker.commerce.productAdjective() + ' ' + baseRecord.textDescription;
    productLine = ({baseRecord}) => baseRecord.productLine;
    productScale = faker.datatype.number(100);
    productVendor = faker.company.name();
    productDescription = faker.lorem.lines(1);
    quantityInStock = faker.datatype.number(1000);
    buyPrice = faker.datatype.float({ max: 1000 });
    MSRP = ({record}) => record.buyPrice;
}

module.exports = Product;
