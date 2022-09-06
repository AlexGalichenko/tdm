const Office = require('./Office');
const EmptyOffice = require('./EmptyOffice');
const Employee = require('./Employee');
const EmployeeWithoutManager = require('./EmployeeWithoutManager');
const Customer = require('./Customer');
const ProductLine = require('./ProductLine');
const Product = require('./Product');
const Order = require('./Order');
const OrderDetails = require('./OrderDetails');
const Payment = require('./Payment');

module.exports = [
    {
        table: 'offices',
        recordSchema: Office,
        numberOfRecords: 5
    },
    {
        table: 'employees',
        basedOn: 'offices',
        numberOfRecordsPerBaseRecord: 100,
        recordSchema: Employee
    },
    {
        table: 'productLines',
        recordSchema: ProductLine,
        numberOfRecords: 50
    },
    {
        table: 'products',
        basedOn: 'productLines',
        recordSchema: Product,
        numberOfRecordsPerBaseRecord: 500
    },
    {
        table: 'customers',
        recordSchema: Customer,
        numberOfRecords: 10000
    },
    {
        table: 'orders',
        basedOn: 'customers',
        recordSchema: Order,
        numberOfRecordsPerBaseRecord: 10
    },
    {
        table: 'orderdetails',
        basedOn: 'orders',
        recordSchema: OrderDetails,
        numberOfRecordsPerBaseRecord: 1
    },
    {
        table: 'payments',
        basedOn: 'customers',
        recordSchema: Payment,
        numberOfRecordsPerBaseRecord: 1
    },
    {
        table: 'offices',
        ctxTable: 'emptyOffices',
        recordSchema: EmptyOffice,
        numberOfRecords: 3
    },
    {
        table: 'employees',
        ctxTable: 'employeesWithoutManager',
        basedOn: 'offices',
        recordSchema: EmployeeWithoutManager,
        numberOfRecordsPerBaseRecord: 10
    },
]
