# TDM Tool

This is the rule based test data generator.
The tool consists of 4 layers:
- Table Definitions (JS Class describing the logic of column generation including access to current context to be able use other tables, records in generation) e.g [Customer.js](./definitions/Customer.js)
- DB Definition (Array that describe sequence of generation and relation between tables) [definition](./definitions/index.js)
- Generator - generator itself [generator](./generator/index.js)
- Loader - transformer to desired format (sql, mongodb, files, whatever) e.g [sql](./loaders/sql.js)
## Install
`npm install`

basically there is only one dependency - @faker/faker that provides capability to generate value

## Run

Generate SQL output

`node generator definitions loaders/sql.js`

Generate JSON output

`node generator definitions loaders/json.js`

