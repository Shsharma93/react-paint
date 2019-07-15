const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'paint_api',
  password: '12345678',
  port: 5432
});

module.exports = pool;
