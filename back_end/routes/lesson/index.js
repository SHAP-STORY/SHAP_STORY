"use strict";
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer = require("multer");
const upload = multer({ dest: "./upload" });
//user_info
var user_info = require('../varient');

// mysql
const db = require('../../db/database');

// 새로운 차시에 들어 갈 때마다 진도율과 어느 페이지까지 완료하였는지 데이터 전달
router.post('/basic/lessionrate', function(req, res, next) {
    console.log('IN URL /basic/lessionrate ---------------------------')
    db.query("SELECT complete, page FROM BasicSubject where class_id= ? AND stdent_id AND TYPE='basic'",[req.body.lesson_num, req.body.id], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

// 해당 차시에 content 전달해주는 부분
router.post('/basic/content', function(req, res, next) {
    console.log('IN URL /basic/content ----------------------------')
    db.query("SELECT contents, title, img FROM BasicSubject where student_id= ? AND index=?",[req.body.id, req.body.index], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

module.exports = router; // 꼭 넣어주기 아니면 에러가 난다!