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

// Basic part
// 새로운 차시에 들어 갈 때마다 진도율과 어느 페이지까지 완료하였는지 데이터 전달
router.post('/basic/lessionrate', function(req, res, next) {
    console.log('IN URL /basic/lessionrate ---------------------------')
    db.query("SELECT complete, page FROM LessonRate where class_id= ? AND student_id= ? AND TYPE='basic'",[req.body.lesson_num, req.body.id], function (error, results, fields) {
        if (error) {
            console.log('ERROR: Connect DB');
            console.log(error);
        }
        console.log('Success Lessonrate: data' + results+'----------------------------')
        res.send(results);
    });
});

// 해당 차시에 content 전달해주는 부분
router.post('/basic/content', function(req, res, next) {
    console.log('IN URL /basic/content ----------------------------')
    db.query("SELECT * FROM BasicSubject WHERE `index`=?",[req.body.index], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log('Success Lessonrate: data' + results+'----------------------------')
        res.send(results);
    });
});

// 다음페이지 넘어갈 때마다 진도율 업데이트
router.post('/basic/complete', function(req, res, next) {
    console.log('IN URL /basic/complete ----------------------------')
    db.query("INSERT INTO LessonRate (`class_id`, `student_id`, `complete`, `type`,`page`) VALUES(?, ?, ?, 'basic', ?) ",[req.body.class_num, req.body.id, req.body.complete, Number(req.body.page)], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log('Success LessonRate: data' + results+'----------------------------')
        console.log(fields)
        res.send(results);
    });
});

// 새로운 차시에 들어 갈 때마다 진도율과 어느 페이지까지 완료하였는지 데이터 전달
router.post('/basic/lessionrate', function(req, res, next) {
    console.log('IN URL /basic/lessionrate ---------------------------')
    db.query("SELECT complete, page FROM LessonRate where class_id= ? AND student_id= ? AND TYPE='advanced'",[req.body.lesson_num, req.body.id], function (error, results, fields) {
        if (error) {
            console.log('ERROR: Connect DB');
            console.log(error);
        }
        console.log('Success Lessonrate: data' + results+'----------------------------')
        res.send(results);
    });
});

//Advanced part
// 해당 차시에 content 전달해주는 부분
router.post('/advanced/content', function(req, res, next) {
    console.log('IN URL /advanced/content ----------------------------')
    db.query("SELECT * FROM AdvancedSubject WHERE `index`=?",[req.body.index], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log('Success Lessonrate: data' + results+'----------------------------')
        res.send(results);
    });
});

// 다음페이지 넘어갈 때마다 진도율 업데이트
router.post('/advanced/complete', function(req, res, next) {
    console.log('IN URL /advanced/complete ----------------------------')
    db.query("INSERT INTO LessonRate (`class_id`, `student_id`, `complete`, `type`,`page`) VALUES(?, ?, ?, 'advanced', ?) ",[req.body.class_num, req.body.id, req.body.complete, Number(req.body.page)], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        console.log('Success LessonRate: data' + results+'----------------------------')
        console.log(fields)
        res.send(results);
    });
});

module.exports = router; // 꼭 넣어주기 아니면 에러가 난다!