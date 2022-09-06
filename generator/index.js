const path = require('path');
const tableDefinitions = require(path.resolve(process.argv[2]));
const loader = require(path.resolve(process.argv[3]));

const data = {};
const ctx = {};
const start = Date.now();

for (const tableDefinition of tableDefinitions) {
    const {
        table,
        ctxTable = table,
        recordSchema,
        numberOfRecords,
        basedOn,
        numberOfRecordsPerBaseRecord
    } = tableDefinition;
    console.log(`generation: ${table}`);
    if (data[table] === undefined) data[table] = [];
    if (ctx[ctxTable] === undefined) ctx[ctxTable] = [];
    let index = 0;
    if (basedOn) {
        for (const baseRecord of ctx[basedOn]) {
            processRecord({
                data,
                table,
                ctx,
                ctxTable,
                numberOfRecords: numberOfRecordsPerBaseRecord,
                index,
                recordSchema,
                baseRecord
            });
        }
    } else {
        processRecord({data, table, ctx, ctxTable, numberOfRecords, index, recordSchema});
    }
}

function processRecord({data, table, ctx, ctxTable, numberOfRecords, index, recordSchema, baseRecord}) {
    for (let i = 0; i < numberOfRecords; i++) {
        const record = new recordSchema();
        for (const column in record) {
            if (typeof record[column] === 'function') {
                record[column] = record[column]({data, ctx, index, record, baseRecord});
            }
        }
        index++;
        data[table].push(record);
        ctx[ctxTable].push(record);
    }
}

loader(data).then(() => console.log(`completed: ${Date.now() - start}ms`));
