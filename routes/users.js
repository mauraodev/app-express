var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = ['Mauro', 'Poli', 'Elena']

  res.json(['Mauro', 'Poli', 'Elena']);
});

module.exports = router;
