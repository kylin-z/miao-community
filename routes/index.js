var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('communityP');
});

router.get('/community', function (req, res, next) {
    res.render('communityP');
});

module.exports = router;
