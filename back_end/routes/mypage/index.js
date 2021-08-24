"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
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
    const data = {
        'userId': user_info[1],
        'userName': user_info[2],
        'userImg': user_info[3]
    }
    res.send(data);
});

router.get('/hardachievement', function(req, res, next) {
    db.query('SELECT class_id, complete FROM LessonRate where student_id= ? ',[user_info[1]], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

router.get('/basicachievement', function(req, res, next) {
    db.query('SELECT class_id, complete FROM LessonRate where student_id= ? ',[user_info[1]], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

router.get('/mywriting', function(req, res, next) {
    db.query('SELECT title, body, date FROM Post where student_id= ?',[user_info[1]], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
    if(req.cookies){
        console.log(req.cookies);
    }
});

// 진도현황 - 기초학습, 심화학습 -> 그 학습 페이지로 들어가기
// 내글 목록
// 전체 페이지 
// 내 사진 수정하기

module.exports = router; // 꼭 넣어주기 아니면 에러가 난다!