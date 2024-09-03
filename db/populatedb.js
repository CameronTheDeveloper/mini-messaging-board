#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const SQL = ` 
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255),
    message VARCHAR(255),
    message_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, message)
VALUES
('Bryan', 'Hello, how are you doing today?'),
('Sarah', 'I am doing well, how about yourself?'),
('Odin', 'Nice to meet both of you!');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.POSTGRESQL_CONNECTION_STRING
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done');
}

main();