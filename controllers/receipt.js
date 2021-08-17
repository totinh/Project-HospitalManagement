// Lương
var express = require('express');
var router = express.Router();
var db = require.main.require('./models/db_controller');
var bodyPaser = require('body-parser');

router.get('*', function(req, res, next) {
    if (req.cookies['username'] == null) {
        res.redirect('/login');
    } else {
        next();
    }
});


router.get('/', function(req, res) {
    db.getAllemployee(function(err, result) {
        res.render('salary.ejs', { employee: result });
    })
});

router.get('/generateslip/:id', function(req, res) {
    var id = req.params.id;
    db.getEmpbyId(id, function(err, result) {
        var name = result[0].name;
        var id = result[0].id;
        var email = result[0].email;
        var chucvu = result[0].chucvu;
        var mucluong = result[0].mucluong;
        var join_date = result[0].join_date;
        var lienhe = result[0].lienhe;
        res.render('payslip.ejs', { name: name, id: id, email: email, chucvu: chucvu, mucluong: mucluong, join_date: join_date, lienhe: lienhe });
    });

});

module.exports = router;