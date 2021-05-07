var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/visualizar', function (req, res, next) {
  res.send("page view");
});

module.exports = router;
