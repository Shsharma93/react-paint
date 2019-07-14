const router = require('express').Router();
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'paint_api',
  password: '12345678',
  port: 5432
});

const getColors = (req, res) => {
  pool.query('SELECT * FROM colors ORDER BY name ASC', (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

router.get('/colors', getColors);

module.exports = router;
