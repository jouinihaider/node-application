var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:test', function(req, res, next) {
  console.log('res ==> ',req.params.test)
  res.send('respond with a resource');
});

module.exports = router;
 