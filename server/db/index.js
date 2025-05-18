const pg = require('pg');
const { Client } = pg
const client = new Client({
    user: 'postgres',
    password: 'Postme2%',
    host: 'localhost',
    port: 8500,
    database: 'b34',
})

module.exports = {
    query: (text, params) => client.query(text, params),
};