var express = require('express');

var router = express.Router();
var bodyParser = require('body-parser');
var db = require.main.require('./models/db_controller');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


module.exports = router;

router.get('/', function(req, res) {
    res.render('add_doctor.ejs');
});
router.post('/', function(req, res) {
    if (!req.files) {
        console.log('Không thể tải file !');
    }
    var file = req.body.image;
    var image = file.name;
    file.mv('/public/images/upload_images' + file.name, function(err) {
        if (err)
            return res.status(500).send(err);
        db.add_doctor(req.body.name, req.body.email, req.body.ngaysinh, req.body.gioitinh, req.body.diachi, req.body.phone, req.body.image, req.body.chuyenkhoa, req.body.tieusu, function(err, result) {
            res.redirect('/doctors');
        });
    });
});
module.exports = router;