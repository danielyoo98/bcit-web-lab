const Pool = require('pg').Pool;

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'artist',
  password: 'password',
  port: 5432
});

module.exports = pool;