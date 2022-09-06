const { faker } = require('@faker-js/faker');

class ProductLine {
    productLine = ({index}) => index + 1;
    textDescription = faker.commerce.product();
    htmlDescription = ({record}) => `<html lang="en-us"><body><span>${record.textDescription}</span></body></html>`;
    image = '';
}

module.exports = ProductLine;
