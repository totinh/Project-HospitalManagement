var mysql = require('mysql');
var express = require('express');
var cookie = require('cookie-parser');
var db = require.main.require('./models/db_controller');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index.ejs');
});

router.post('/', function(req, res) {
    db.getindex(req.body.tenbenhnhan, req.body.phone, req.body.tenbacsi, req.body.time, req.body.date, req.body.yeucaukham, function(err, result) {
        res.redirect('/');
    });
});

module.exports = router;