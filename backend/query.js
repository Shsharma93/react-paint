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
  pool.query('SELECT * FROM colors ORDER BY name ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const postColors = (req, res) => {
  const { colors, savedCanvas } = req.body;
  colors.forEach(color => {
    pool.query(
      'UPDATE colors SET totalclicks = $1, sessionclicks = $2 WHERE name = $3',
      [color.totalclicks, color.sessionclicks, color.name],
      (error, results) => {
        if (error) {
          throw error;
        }
      }
    );
  });

  pool.query(
    'UPDATE canvas SET name = $1 WHERE id = $2',
    [savedCanvas, 1],
    (error, results) => {
      if (error) {
        throw error
      }
    }
  )

  res.status(200).send('colors modified');
};

router.get('/colors', getColors);
router.post('/colors', postColors);

module.exports = router;
