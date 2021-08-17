var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require('./models/db_controller');
var mysql = require('mysql');
var nodemailer = require('nodemailer');
var randomToken = require('random-token');
const { check, validationResult } = require('express-validator');



router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(req, res) {
    res.render('signup.ejs');
});

router.post('/', [check('username').notEmpty().withMessage("Tên đăng nhập không thể để trống !"),
    check('password').notEmpty().withMessage("Mật khẩu không thể để trống !"),
    check('email').notEmpty().isEmail().withMessage('Email không thể để trống!')
], function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    var email_status = "Duyệt!";
    db.signup(req.body.username, req.body.email, req.body.password, email_status, function(err, result) {
        res.redirect('login');
    });

});

module.exports = router;