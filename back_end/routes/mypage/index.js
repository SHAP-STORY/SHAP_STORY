"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req,res,cb) => {
        cb(null, './upload');
    },
    filename: (req,file,cb) => {
        console.log(file);
        cb(null, Date.now() + '.png');
    }
});
const upload = multer({storage});

//user_info
var user_info = require('../varient');

// mysql
const db = require('../../db/database');

router.get('/', function(req, res, next) {
    db.query('SELECT * FROM lessonrate', function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
    });
    if(req.cookies){
        console.log(req.cookies);
    }
    var basic = 30;
    var hard = 40;
    res.render('mypage/mypage', {
        basic:basic,
        hard:hard
      });
});

router.get('/user', function (req, res, next) {
    console.log('IN URL /user ---------------------------')
    const data = {
        'userId': user_info[1],
        'userName': user_info[2],
        'userImg': user_info[3]
    }
    res.send(data);
});

router.post('/advancedachievement', function(req, res, next) {
    console.log('IN URL /advancedachievement ---------------------------')
    console.log(req.body.id)
    db.query("SELECT class_id, complete FROM LessonRate where student_id= ? AND TYPE='advanced'",[req.body.id], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

router.post('/basicachievement', function(req, res, next) {
    console.log('IN URL /basicachievement ---------------------------')
    console.log(req.body.id)
    db.query("SELECT class_id, complete FROM LessonRate where student_id= ? AND TYPE= 'basic'",[req.body.id], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

router.post('/mywriting', function(req, res, next) {
    console.log('IN URL /mywriting ---------------------------')
    console.log(req.body.id);
    db.query('SELECT title, body, date FROM Post where student_id= ?',[req.body.id], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        if(results){
            res.send(results);
        }else{
            res.send('');
        }
    });
    if(req.cookies){
        console.log(req.cookies);
    }
});

router.use("/image", express.static("./upload"));

router.post('/photo', upload.single("image"), (req, res) => {
    console.log('IN URL /photo ---------------------------')
    console.log(req.body.id);
    let sql = "UPDATE Student SET img = ? Where id = ?";
    let image = "http://localhost:5000/api/mypage/image/" + req.file.filename;
    let id = req.body.id;
    let params = [image, id];
    db.query(sql, params, (err, rows, fields) => {
      console.log(rows);
    });
    db.query("SELECT img FROM Student where id= ?",[req.body.id], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.send(results);
    });
  });

module.exports = router; // 꼭 넣어주기 아니면 에러가 난다!