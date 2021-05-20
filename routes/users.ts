import express from 'express'
const router = express.Router()

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = ['Mauro', 'Poli', 'Elena']

  res.json(['Mauro', 'Poli', 'Elena', 'Melissa']);
});

module.exports = router;
