const Office = require('./Office');

class EmptyOffice extends Office {
    officeCode = ({index}) => index + 1000;
}

module.exports = EmptyOffice;
