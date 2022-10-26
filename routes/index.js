var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OTPA EE2交接本' });
});

router.post('/PM_Follow', function( req, res, next) {
  res.render('PM_Follow', { title: 'OTFA EE2 交接本' });
}) ;

router.post('/index', function( req, res, next) {
  res.render('index', { title: 'OTFA EE2 交接本' });
}) ;


module.exports = router;