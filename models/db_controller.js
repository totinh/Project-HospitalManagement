var mysql = require('mysql');
var express = require('express');
var router = express.Router();


var con = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pnt'
});

con.connect(function(err) {
    if (err) {
        throw err;

    } else {
        console.log('Đã conencted database !');
    }
});

// Admin
module.exports.signup = function(username, email, password, status, callback) {
    var query = "INSERT INTO `users`(`username`,`email`,`password`,`email_status`) VALUES ('" + username + "','" + email + "','" + password + "','" + status + "')";
    con.query(query, callback);
}
module.exports.findOne = function(email, callback) {
    var query = "select *from users where email='" + email + "'";
    con.query(query, callback);
    console.log(query);
}

module.exports.setpassword = function(id, newpassword, callback) {
    var query = "update `users` set `password`='" + newpassword + "' where id=" + id;
    con.query(query, callback);
}


module.exports.updateverify = function(email, email_status, callback) {
    var query = "update `users` set `email_status`='" + email_status + "' where `email`='" + email + "'";
    con.query(query, callback);

}
module.exports.getuserdetails = function(username, callback) {
    var query = "select * from users where username='" + username + "'";
    con.query(query, callback);
    console.log(query);
}

module.exports.edit_profile = function(id, username, email, password, callback) {
    var query = "update users set username ='" + username + "', email = '" + email + "',password='" + password + "' where id=" + id;
    con.query(query, callback);
    console.log(query);
}

// Bac si
module.exports.getAllDoc = function(callback) {
    var query = "select * from bacsi";
    con.query(query, callback);
}

module.exports.getDocbyId = function(id, callback) {
    var query = "select * from bacsi where id =" + id;
    con.query(query, callback);
}
module.exports.add_doctor = function(name, email, ngaysinh, gioitinh, diachi, phone, image, chuyenkhoa, tieusu, callback) {
    var query = "INSERT INTO `bacsi`(`name`,`email`,`ngaysinh`,`gioitinh`,`diachi`,`phone`,`image`,`chuyenkhoa`,`tieusu`) values ('" + name + "','" + email + "','" + ngaysinh + "','" + gioitinh + "','" + diachi + "','" + phone + "','" + image + "','" + chuyenkhoa + "','" + tieusu + "')";
    con.query(query, callback);
    // console.log(query);
}

module.exports.editDoc = function(id, name, email, ngaysinh, gioitinh, diachi, phone, image, chuyenkhoa, tieusu, callback) {
    var query = "update `bacsi` set `name`='" + name + "', `email`='" + email + "', `ngaysinh`='" + ngaysinh + "',`gioitinh`='" + gioitinh + "',`diachi`='" + diachi + "',`phone`='" + phone + "',`image`='" + image + "',`chuyenkhoa`='" + chuyenkhoa + "',`tieusu`='" + tieusu + "' where id=" + id;
    con.query(query, callback);
}
module.exports.deleteDoc = function(id, callback) {
    var query = "delete from bacsi where id=" + id;
    con.query(query, callback);
}
module.exports.searchDoc = function(key, callback) {
    var query = 'SELECT  *from bacsi where name like "%' + key + '%"';
    con.query(query, callback);
    console.log(query);
}

// Nhan vien
module.exports.getAllemployee = function(callback) {
    var query = "select * from nhanvien";
    con.query(query, callback);
}
module.exports.getEmpbyId = function(id, callback) {
    var query = "select * from nhanvien where id =" + id;
    con.query(query, callback);
}

module.exports.editEmp = function(id, name, email, contact, join_date, role, callback) {
    var query = "update `nhanvien` set `name`='" + name + "', `email`='" + email + "', `lienhe`='" + contact + "', `join_date`='" + join_date + "', `chucvu`='" + role + "' where id=" + id;
    con.query(query, callback);
}

module.exports.deleteEmp = function(id, callback) {;
    var query = "delete from nhanvien where id=" + id;
    con.query(query, callback);
}
module.exports.searchEmp = function(key, callback) {
    var query = 'SELECT  *from nhanvien where name  like "%' + key + '%"';
    con.query(query, callback);
    console.log(query);
}
module.exports.add_employee = function(name, email, contact, join_date, role, salary, callback) {
    var query = "Insert into `nhanvien` (`name`,`email`,`lienhe`,`join_date`,`chucvu`,`mucluong`) values ('" + name + "','" + email + "','" + contact + "','" + join_date + "','" + role + "','" + salary + "')";
    con.query(query, callback);
    console.log(query);
}

// Lichsukhambenh
module.exports.getAllHistory = function(callback) {
    var query = "select * from lichsukham order by id desc";
    con.query(query, callback);
    console.log(query);
}
module.exports.getHistorybyID = function(id, callback) {
    var query = "select * from lichsukham where id=" + id;
    con.query(query, callback);
}
module.exports.add_history = function(namebn, namebs, mabhyt, ngaykhambenh, ngaytaikham, donthuoc, chuandoan, callback) {
    var query = "Insert into `lichsukham` (`namebn`,`namebs`,`mabhyt`,`ngaykhambenh`,`ngaytaikham`,`donthuoc`,`chuandoan`) values ('" + namebn + "','" + namebs + "','" + mabhyt + "','" + ngaykhambenh + "','" + ngaytaikham + "','" + donthuoc + "','" + chuandoan + "')";
    con.query(query, callback);
    console.log(query);
}

module.exports.searchhistory_bs = function(key, key1, key2, key3, callback) {
    var query = 'select * from `lichsukham` where ((`namebs` like "%' + key + '%") and (`mabhyt` like "%' + key1 + '%") and (`ngaykhambenh` like "%' + key2 + '%") and (`ngaytaikham` like "%' + key3 + '%"))';
    con.query(query, callback);
}

// Benh nhan
module.exports.getAllPatients = function(callback) {
    var query = "select * from benhnhan order by id desc";
    con.query(query, callback);
    console.log(query);
}

module.exports.getPatientsbyID = function(id, callback) {
    var query = "select * from benhnhan where id=" + id;
    con.query(query, callback);
}
module.exports.addPatients = function(name, mabhyt, ngaysinh, diachi, gioitinh, phone, chuandoan, callback) {
    var query = "Insert into `benhnhan` (`name`,`mabhyt`,`ngaysinh`,`diachi`,`gioitinh`,`phone`,`chuandoan`) values ('" + name + "','" + mabhyt + "','" + ngaysinh + "','" + diachi + "','" + gioitinh + "','" + phone + "','" + chuandoan + "')";
    con.query(query, callback);
    console.log(query);

}
module.exports.searchPatients = function(key, callback) {
    var query = 'select * from benhnhan where mabhyt like "%' + key + '%"';
    con.query(query, callback);
}
module.exports.editPatients = function(id, name, mabhyt, ngaysinh, diachi, gioitinh, phone, chuandoan, callback) {
    var query = "update `benhnhan` set `name`='" + name + "',`mabhyt`='" + mabhyt + "',`ngaysinh`='" + ngaysinh + "',`diachi`='" + diachi + "',`gioitinh`='" + gioitinh + "',`phone`='" + phone + "',`chuandoan`='" + chuandoan + "' where id=" + id;
    con.query(query, callback);
}
module.exports.deletePatients = function(id, callback) {
    var query = "delete from benhnhan where id=" + id;
    con.query(query, callback);
    console.log(query);
}

// Quay thuoc
module.exports.getallmed = function(callback) {
    var query = "select *from quaythuoc order by id desc";
    console.log(query);
    con.query(query, callback);
}
module.exports.getMedbyId = function(id, callback) {
    var query = "select * from quaythuoc where id=" + id;
    con.query(query, callback);
}
module.exports.deletemed = function(id, callback) {
    var query = "delete from quaythuoc where id=" + id;
    con.query(query, callback);
}
module.exports.searchmed = function(key, callback) {
    var query = 'SELECT  *from quaythuoc where name like "%' + key + '%"';
    con.query(query, callback);
}
module.exports.addMed = function(name, p_date, expire, e_date, price, quantity, callback) {
    var query = "Insert into `quaythuoc` (name,ngaymua,thoigiansd,ngayhethan,gia,soluong) values('" + name + "','" + p_date + "','" + expire + "','" + e_date + "','" + price + "','" + quantity + "')";
    console.log(query);
    con.query(query, callback);
}
module.exports.editmed = function(id, name, p_date, expire, e_date, price, quantity, callback) {
    var query = "update quaythuoc set name='" + name + "', ngaymua='" + p_date + "',thoigiansd='" + expire + "' ,ngayhethan='" + e_date + "',gia='" + price + "',soluong='" + quantity + "' where id=" + id;
    console.log(query);
    con.query(query, callback);
}

// Dat lich kham
module.exports.getindex = function(tenbenhnhan, phone, tenbacsi, time, date, yeucaukham, callback) {
    var query = "insert into lichkhambenh (tenbenhnhan, phone, tenbacsi, time, date, yeucaukham) values ('" + tenbenhnhan + "','" + phone + "','" + tenbacsi + "','" + time + "','" + date + "','" + yeucaukham + "')";
    con.query(query, callback);
}

// Lich kham benh
module.exports.add_appointment = function(tenbenhnhan, phone, tenbacsi, date, time, yeucaukham, callback) {
    var query = "insert into lichkhambenh (tenbenhnhan, phone, tenbacsi, date, time, yeucaukham) values ('" + tenbenhnhan + "','" + phone + "','" + tenbacsi + "','" + date + "','" + time + "','" + yeucaukham + "')";
    con.query(query, callback);
}

module.exports.getallappointment = function(callback) {
    var query = "select * from lichkhambenh";
    con.query(query, callback);
}

module.exports.getappointmentbyid = function(id, callback) {
    var query = "select * from lichkhambenh where id=" + id;
    console.log(query);
    con.query(query, callback);
}

module.exports.editappointment = function(id, tenbenhnhan, yeucaukham, tenbacsi, date, time, phone, callback) {
    var query = "update lichkhambenh set tenbenhnhan='" + tenbenhnhan + "',yeucaukham='" + yeucaukham + "',tenbacsi='" + tenbacsi + "',date='" + date + "',time='" + time + "',phone='" + phone + "' where id=" + id;
    con.query(query, callback);
}

module.exports.deleteappointment = function(id, callback) {
    var query = "delete from lichkhambenh where id=" + id;
    con.query(query, callback);
}
module.exports.searchmed = function(key, callback) {
    var query = 'SELECT  *from lichkhambenh where phone like "%' + key + '%"';
    con.query(query, callback);
}

// Lich nghi
module.exports.add_leave = function(name, id, type, from, to, reason, callback) {
    var query = "Insert into `lichnghi` (`namenv`,`idnv`,`hinhthuc`,`date_from`,`date_to`,`lydo`) values ('" + name + "','" + id + "','" + type + "','" + from + "','" + to + "','" + reason + "')";
    console.log(query);
    con.query(query, callback);


}

module.exports.getAllLeave = function(callback) {
    var query = "Select * from lichnghi";
    con.query(query, callback);

}
module.exports.getleavebyid = function(id, callback) {
    var query = "select * from lichnghi where id=" + id;
    con.query(query, callback);
}

module.exports.deleteleave = function(id, callback) {
    var query = "delete  from lichnghi where id=" + id;
    con.query(query, callback);
}

module.exports.edit_leave = function(id, name, leave_type, from, to, reason, callback) {
    var query = "update lichnghi set namenv ='" + name + "',hinhthuc='" + leave_type + "',date_from='" + from + "',date_to='" + to + "',lydo='" + reason + "' where id=" + id;
    con.query(query, callback);
}

// Chuyen khoa
module.exports.add_dept = function(tenchuyenkhoa, mota, callback) {
    var query = "insert into chuyenkhoa(tenchuyenkhoa,mota) values ('" + tenchuyenkhoa + "','" + mota + "')";
    con.query(query, callback);
}

module.exports.getalldept = function(callback) {
    var query = "select * from chuyenkhoa";
    con.query(query, callback);
}

module.exports.delete_department = function(id, callback) {
    var query = "delete from chuyenkhoa where id=" + id;
    con.query(query, callback);
}

module.exports.getdeptbyId = function(id, callback) {
    var query = "select * from chuyenkhoa where id=" + id;
    con.query(query, callback);
}

module.exports.edit_dept = function(id, tenchuyenkhoa, mota, callback) {
    var query = "update chuyenkhoa set tenchuyenkhoa='" + tenchuyenkhoa + "',mota='" + mota + "' where id=" + id;
    con.query(query, callback);
}
module.exports.searchdept = function(key, callback) {
    var query = 'SELECT  *from chuyenkhoa where tenchuyenkhoa like "%' + key + '%"';
    con.query(query, callback);
}