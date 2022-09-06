const fs = require('fs/promises');

module.exports = async function (data) {
    await fs.writeFile('out.json', JSON.stringify(data, null, 2));
}
