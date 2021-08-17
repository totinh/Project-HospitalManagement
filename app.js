var express = require('express');
var session = require('express-session');
var cookie = require('cookie-parser');
var path = require('path');
var ejs = require('ejs');
var multer = require('multer');
var path = require('path');
var async = require('async');
var nodmailer = require('nodemailer');
var crypto = require('crypto');
var expressValidator = require('express-validator');
var sweetalert = require('sweetalert2');
var app = express();

var bodyParser = require('body-parser');

var login = require('./controllers/login');
var home = require('./controllers/home');
var signup = require('./controllers/signup');
var add_doc = require('./controllers/add_doctor');
var patients = require('./controllers/patients');
var history = require('./controllers/history');
var doc_controller = require('./controllers/doc_controller');
var db = require('./models/db_controller');
var employee = require('./controllers/employee.js');
var logout = require('./controllers/logout');
var store = require('./controllers/store');
var index = require('./controllers/index');
var appointment = require('./controllers/appointment');
var receipt = require('./controllers/receipt');

var app = express();


app.set('view engine ', 'ejs');

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookie());

var server = app.listen(3000, function() {

    console.log('Đã chạy server !');
});

app.use('/login', login);
app.use('/home', home);
app.use('/signup', signup);
app.use('/doctors', doc_controller);
app.use('/patients', patients);
app.use('/history', history);
app.use('/employee', employee);
app.use('/logout', logout);
app.use('/store', store);
app.use('/', index);
app.use('/appointment', appointment);
app.use('/receipt', receipt);
app.use('/add_doctor', add_doc);