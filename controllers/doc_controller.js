var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var path = require('path');


var db = require.main.require('./models/db_controller');


router.get('*', function(req, res, next) {
    if (req.cookies['username'] == null) {
        res.redirect('/login');
    } else {
        next();
    }
});



var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images/upload_images"); //avartar bác sĩ được đưa vào đây
    },
    filename: function(req, file, cb) {
        console.log(file); //log the file object info in console
        cb(null, file.originalname); //here we specify the file saving name. in this case. 
        //i specified the original file name .you can modify this name to anything you want
    }
});

var upload = multer({ storage: storage });


router.get('/', function(req, res) {

    db.getAllDoc(function(err, result) {
        if (err)
            throw err;
        res.render('doctors.ejs', { list: result })
    });

});

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/add_doctor', function(req, res) {
    db.getalldept(function(err, result) {
        res.render('add_doctor.ejs', { list: result });
    });
});

router.post('/add_doctor', upload.single("image"), function(req, res) {
    db.add_doctor(req.body.name, req.body.email, req.body.ngaysinh, req.body.gioitinh, req.body.diachi, req.body.phone, req.file.filename, req.body.chuyenkhoa, req.body.tieusu, function(err, result) {
        res.redirect('/doctors');
    });
});

router.get('/edit_doctor/:id', function(req, res) {
    var id = req.params.id;
    db.getDocbyId(id, function(err, result) {
        res.render('edit_doctor.ejs', { list: result });
    });
});

router.post('/edit_doctor/:id', function(req, res) {
    var id = req.params.id;
    db.editDoc(id, req.body.name, req.body.email, req.body.ngaysinh, req.body.gioitinh, req.body.diachi, req.body.phone, req.body.image, req.body.chuyenkhoa, req.body.tieusu, function(err, result) {
        res.redirect('/doctors');
    });
});

router.get('/delete_doctor/:id', function(req, res) {
    var id = req.params.id;
    db.getDocbyId(id, function(err, result) {
        res.render('delete_doctor.ejs', { list: result })
    });


});

router.post('/delete_doctor/:id', function(req, res) {
    var id = req.params.id;
    db.deleteDoc(id, function(err, result) {
        res.redirect('/doctors');
    });
});

router.get('/', function(req, res) {
    db.getAllDoc(function(err, result) {
        if (err)
            throw err;
        res.render('doctors.ejs', { list: result })
    });

});

router.post('/search', function(req, res) {
    var key = req.body.search;
    db.searchDoc(key, function(err, result) {
        console.log(result);
        res.render('doctors.ejs', { list: result });
    });
});

module.exports = router;