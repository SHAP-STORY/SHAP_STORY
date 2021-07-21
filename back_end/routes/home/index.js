"use strict";

const express = require('express');
const router = express.Router();

const port = 3000;
// home.ctrl을 불러와서 그 안에 객체들 이용.
const ctrl = require("./home.ctrl");

router.get('/', function (req, res) {
    res.status(200).json({ 'msg': 'Hello World' });
});
//register 화면
router.get('/register', ctrl.register);

// mysql
const db = require('../../db/database');

// 비밀번호 암호화 bcrypt hash 함수
const bcrypt = require('bcrypt');
const saltRounds = 10; //ANCHOR passwd varchar(255)로 바꿔줌.(그 전에걸로 했을 때 data가 길다는 오류가 뜸.)

router.post('/register', (req, res, next) => {
    console.log(req.body);
    const param = [req.body.id, req.body.passwd, req.body.name, req.body.grade]
    bcrypt.hash(param[1], saltRounds, (err, hash) => {
        param[1] = hash;
        db.query('INSERT INTO user(`id`, `passwd`, `name`, `grade`) VALUES (?,?,?,?)', param, (err, row) => {
            if (err) console.log(err);
        });
    });
    res.end();
});

module.exports = router;