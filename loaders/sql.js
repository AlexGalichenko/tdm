const fs = require('fs/promises');

module.exports = async function (data) {
    const queryLines = [];
    queryLines.push(`SET FOREIGN_KEY_CHECKS = 0;`);
    for (const table in data) {
        queryLines.push(`DELETE FROM ${table};`);
        const tableValues = [];
        for (const record of data[table]) {
            const values = [];
            for (const column in record) {
                values.push(value(record[column]));
            }
            tableValues.push(`(${values.join(',')})`);
        }
        queryLines.push(`INSERT INTO ${table} VALUES ${tableValues.join(', ')};`)

    }
    queryLines.push(`SET FOREIGN_KEY_CHECKS = 1;`);
    await fs.writeFile('out.sql', queryLines.join('\n'));
};

function value(val) {
    if (typeof val === 'string') return JSON.stringify(val);
    if (typeof val === 'number') return val;
    if (val === null) return 'NULL';
    if (val instanceof Date) return JSON.stringify(val.toISOString().slice(0, 19).replace('T', ' '));
    return val
}
