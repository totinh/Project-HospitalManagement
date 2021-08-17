var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require('./models/db_controller');
const { check, validationResult } = require('express-validator');

module.exports = router;



router.get('*', function(req, res, next) {
    if (req.cookies['username'] == null) {
        res.redirect('/login');
    } else {
        next();
    }
});

router.get('/', function(req, res) {
    db.getAllemployee(function(err, result) {
        res.render('employee.ejs', { employee: result });

    });

});

router.get('/add', function(req, res) {
    res.render('add_employee.ejs');
});

router.post('/add', function(req, res) {
    var namenv = req.body.name;
    var email = req.body.email;
    var lienhe = req.body.contact;
    var join_date = req.body.date;
    var chucvu = req.body.role;
    var mucluong = req.body.salary;

    db.add_employee(namenv, email, lienhe, join_date, chucvu, mucluong, function(err, result) {
        console.log('Đã thêm nhân viên !');
        res.redirect('/employee');
    });

});


router.get('/leave', function(req, res) {
    db.getAllLeave(function(err, result) {

        res.render('leave.ejs', { user: result });
    });
});

router.get('/add_leave', function(req, res) {
    res.render('add_leave.ejs');

});

router.get('/edit_leave/:id', function(req, res) {

    var id = req.params.id;
    db.getleavebyid(id, function(err, result) {
        res.render('edit_leave.ejs', { user: result });
    });
});

router.post('/edit_leave/:id', function(req, res) {
    var id = req.params.id;
    db.edit_leave(id, req.body.name, req.body.leave_type, req.body.from, req.body.to, req.body.reason, function(err, result) {
        res.redirect('/employee/leave');
    });
});

router.get('/delete_leave/:id', function(req, res) {
    var id = req.params.id;
    db.getleavebyid(id, function(err, result) {

        res.render('delete_leave.ejs', { user: result });
    });
});

router.post('/delete_leave/:id', function(req, res) {
    var id = req.params.id;

    db.deleteleave(id, function(err, result) {
        res.redirect('/employee/leave');
    });

});

router.get('/edit_employee/:id', function(req, res) {
    var id = req.params.id;
    db.getEmpbyId(id, function(err, result) {

        res.render('edit_employee.ejs', { list: result });
    });
});



router.post('/edit_employee/:id', function(req, res) {
    var id = req.params.id;
    db.editEmp(id, req.body.name, req.body.email, req.body.contact, req.body.date, req.body.role, function(err, result) {
        res.redirect('/employee');
    });

});

router.get('/delete_employee/:id', function(req, res) {
    var id = req.params.id;
    db.getEmpbyId(id, function(err, result) {

        res.render('delete_employee.ejs', { list: result });
    });
});

router.post('/delete_employee/:id', function(req, res) {
    var id = req.params.id;

    db.deleteEmp(id, function(err, result) {
        res.redirect('/employee');
    });

});

router.post('/search', function(req, res) {
    var key = req.body.search;
    db.searchEmp(key, function(err, result) {
        console.log(result);

        res.render('employee.ejs', { employee: result });
    });
});


router.post('/add_leave', [
    check('name').notEmpty(),
    check('id').notEmpty(),
    check('leave_type').notEmpty(),
    check('from').notEmpty().withMessage('select a date'),
    check('to').notEmpty().withMessage('select a date'),
    check('reason').notEmpty().withMessage('Specify Reason')
], function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    db.add_leave(req.body.name, req.body.id, req.body.leave_type, req.body.from, req.body.to, req.body.reason, function(err, result) {
        res.redirect('/employee/leave');
    });
});