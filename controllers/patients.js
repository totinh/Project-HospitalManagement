var mysql = require('mysql');
var express = require('express');
var cookie = require('cookie-parser');
var db = require.main.require('./models/db_controller');
var router = express.Router();


router.get('*', function(req, res, next) {
    if (req.cookies['username'] == null) {
        res.redirect('/login');
    } else {
        next();
    }
});


router.get('/', function(req, res) {
    db.getAllPatients(function(err, result) {
        res.render('patients.ejs', { list: result });
    })

});

// Thêm bệnh nhân
router.get('/add_patients', function(req, res) {
    db.getallappointment(function(err, result) {
        res.render('add_patients.ejs', { list: result });
    });
});

router.post('/add_patients', function(req, res) {
    var name = req.body.name;
    var mabhyt = req.body.mabhyt;
    var ngaysinh = req.body.ngaysinh;
    var diachi = req.body.diachi;
    var gioitinh = req.body.gioitinh;
    var phone = req.body.phone;
    var chuandoan = req.body.chuandoan;
    db.addPatients(name, mabhyt, ngaysinh, diachi, gioitinh, phone, chuandoan, function(err, result) {
        res.redirect('/patients');
    });
});
router.get('/edit_patients/:id', function(req, res) {
    var id = req.params.id;
    db.getPatientsbyID(id, function(err, result) {
        res.render('edit_patients.ejs', { list: result });
    });
});
router.post('/edit_patients/:id', function(req, res) {
    var id = req.params.id;
    db.editPatients(id, req.body.name, req.body.mabhyt, req.body.ngaysinh, req.body.diachi, req.body.gioitinh, req.body.phone, req.body.chuandoan, function(err, result) {
        res.redirect('/patients');
    });
});

router.get('/delete_patients/:id', function(req, res) {
    var id = req.params.id;
    db.getPatientsbyID(id, function(err, result) {
        res.render('delete_patients.ejs', { list: result });
    });
});

router.post('/delete_patients/:id', function(req, res) {
    var id = req.params.id;
    db.deletePatients(id, function(err, result) {
        res.redirect('/patients');
    });
});

router.post('/search', function(req, res) {
    var key = req.body.search;
    db.searchPatients(key, function(err, result) {
        console.log(result);
        res.render('patients.ejs', { list: result });
    });
});
module.exports = router;