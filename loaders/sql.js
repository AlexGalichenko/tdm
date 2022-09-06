const fs = require('fs/promises');

module.exports = async function (data) {
    const queryLines = [];
    for (const table in data) {
        queryLines.push(`DELETE FROM ${table};`);
        for (const record of data[table]) {
            const values = [];
            for (const column in record) {
                values.push(value(record[column]));
            }
            queryLines.push(`INSERT INTO ${table} VALUES (${values.join(',')});`)
        }
    }

    await fs.writeFile('out.sql', queryLines.join('\n'));
};

function value(val) {
    if (typeof val === 'string') return JSON.stringify(val);
    if (typeof val === 'number') return val;
    if (val instanceof Date) return JSON.stringify(val.toISOString());
    return val
}
