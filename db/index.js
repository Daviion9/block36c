const pg = require('pg');
const { Client } = pg
const client = new Client({
    user: 'michell',
    password: '',
    host: 'localhost',
    port: 5432,
    database: '2412-ftb-mt-web-pt',
})

module.exports = {
    query: (text, params) => client.query(text, params),
};