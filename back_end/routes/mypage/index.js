"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
var userid = "test";
var basic= [
    {
      id: "1",
      title: "개미와 베짱이",
      achievement: "40",
      img: "https://placeimg.com/15/15/1",
    },
  ]
  var hard= [
    {
      id: "2",
      title: "알라딘의 요술램프",
      achievement: "40",
      img: "https://placeimg.com/15/15/2",
    },
    {
      id: "3",
      title: "신데렐라",
      achievement: "100",
      img: "https://placeimg.com/15/15/3",
    },
  ];
  var mywriting= [
    {
      title: "Basic 3강에서 질문있습니다! 자꾸 에러가 나요.",
      question: "3강을 수강하는 중에 에러가 납니다. 어떻게 해야할까요?",
      date: "2021.07.24 오전 11:30",
    },
    {
      title: "1강에서 이해가 안되는 것이 있어요.",
      question: "기타가 어떻게 소리가 나게 되는 건가요!?",
      date: "2021.07.24 오전 11:30",
    },
    {
      title: "질문이 있습니다.",
      question:
        "기타가 어떻게 소리가 나게 되는 건가요!? 기타가 어떻게 소리가 나게 되는 건가요!? 기타가 어떻게 소리가 나게 되는 건가요!? 기타가 어떻게 소리가 나게 되는 건가요!? 기타가 어떻게 소리가 나게 되는 건가요!?",
      date: "2021.07.24 오전 11:15",
    },
  ]

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

router.get('/hardachievement', function(req, res, next) {
    db.query('SELECT class_id, complete FROM LessonRate where student_id= ? ',[userid], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

router.get('/basicachievement', function(req, res, next) {
    db.query('SELECT class_id, complete FROM LessonRate where student_id= ? ',[userid], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

router.get('/mywriting', function(req, res, next) {
    db.query('SELECT title, body, date FROM Post where student_id= ?',[userid], function (error, results, fields) {
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