const { faker } = require('@faker-js/faker');

class Office {
    officeCode = ({index}) => index + 1;
    city = faker.address.city();
    phone = faker.phone.number('###-###-###');
    addressLine1 = faker.address.streetAddress();
    addressLine2 = faker.address.secondaryAddress();
    state = faker.address.state();
    postalCode = faker.address.zipCode();
    country = faker.address.country();
    territory =  faker.address.country();
}

module.exports = Office;
