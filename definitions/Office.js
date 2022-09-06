const { faker } = require('@faker-js/faker');

class Office {
    officeCode = ({index}) => index + 1;
    city = faker.address.city();
    phone = faker.phone.number('###-###-###');
    addressLine1 = faker.address.streetAddress();
    addressLine2 = faker.address.secondaryAddress();
    state = faker.address.state();
    country = faker.address.country();
    postalCode = faker.address.zipCode('#####');
    territory = faker.helpers.arrayElement(['CEEMEA', 'EEMEA', 'SEMEA', 'MENA', 'AMER', 'NALA', 'NORAM', 'LATAM', 'APAC']);
}

module.exports = Office;
