# TDM Tool

This is the rule based test data generator.
The tool consists of 4 layers:
- Table Definitions (JS Class describing the logic of column generation)
- DB Definition (Array that describe sequence of generation and relation between tables)
- Generator - generator itself
- Loader - transformer to desired format (sql, mongo, files, whatever)
## Install
`npm install`

basically there is only one dependency - @faker/faker that provides capability to generate value

## Run

Generate SQL output

`node generator definitions loaders/sql.js`

Generate JSON output

`node generator definitions loaders/json.js`

