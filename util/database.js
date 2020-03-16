const Pool = require('pg').Pool;

const pool = new Pool({
  host: 'ec2-3-229-210-93.compute-1.amazonaws.com',
  user: 'ikzlbxigjmdbqi',
  database: 'ddd3areasld2fi',
  password: 'c14d79586a873c152ba3c0d273e962d3d299193f0c09b244bcba0b74701009f1',
  port: 5432
});

module.exports = pool;