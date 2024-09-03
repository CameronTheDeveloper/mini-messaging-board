require('dotenv').config();
const { Pool } = require('pg');

module.exports = new Pool({
    connectionString: process.env.POSTGRESQL_CONNECTION_STRING
});