const {Client} = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database:'dgfg',
    password:'dg',
    port:5245,
});
client.connect();
module.exports = client;