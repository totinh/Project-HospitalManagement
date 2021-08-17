var mysql = require('mysql');
var express = require('express');
var cookie = require('cookie-parser');
var db = require.main.require('./models/db_controller');
var router = express.Router();

module.exports = router;

router.get('*', function(req, res, next) {
    if (req.cookies['username'] == null) {
        res.redirect('/login');
    } else {
        next();
    }
});

router.get('/', function(req, res) {
    db.getAllHistory(function(err, result) {
        res.render('history.ejs', { list: result });
    });
});

// Thêm lịch sử khám bệnh
router.get('/add_history', function(req, res) {
    db.getallappointment(function(err, result1) {
        db.getAllDoc(function(err, result) {
            res.render('add_history.ejs', { list: result, list1: result1 });
        });
    });

});

router.post('/add_history', function(req, res) {
    var namebs = req.body.namebs;
    var namebn = req.body.namebn;
    var mabhyt = req.body.mabhyt;
    var ngaykhambenh = req.body.ngaykhambenh;
    var ngaytaikham = req.body.ngaytaikham;
    var donthuoc = req.body.donthuoc;
    var chuandoan = req.body.chuandoan;
    db.add_history(namebn, namebs, mabhyt, ngaykhambenh, ngaytaikham, donthuoc, chuandoan, function(err, result) {
        res.redirect('/history');
    });
});
router.post('/search', function(req, res) {
    var key = req.body.key;
    var key1 = req.body.key1;
    var key2 = req.body.key2;
    var key3 = req.body.key3;
    db.searchhistory_bs(key, key1, key2, key3, function(err, result) {
        console.log(result);
        res.render('history.ejs', { list: result });
    });
});