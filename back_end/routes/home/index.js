"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// mysql
const db = require('../../db/database');

// 비밀번호 암호화 bcrypt hash 함수
const bcrypt = require('bcrypt');
const saltRounds = 10; //ANCHOR passwd varchar(255)로 바꿔줌.(그 전에걸로 했을 때 data가 길다는 오류가 뜸.)

// home.ctrl을 불러와서 그 안에 객체들 이용.
const ctrl = require("./home.ctrl");

router.get('/', function (req, res, next) {
    if (req.cookies) {
        console.log(req.cookies);
    }
    res.render("home/home");
});


//register get
var registerState = false; // register되면 true, 초기값 false

router.get('/register', function (req, res, next) {
    console.log('in -> /api/home/register');

});

router.post('/register', function (req, res, next) {
    console.log(req.body);
    let user_id = req.body.id;     //req는 데이터를 받은건데 ①에서 data객체를 보내줫었다

    console.log(req.body.id);
    //sql 쿼리문-> id 에맞는 row들고 오고싶다
    let sql = 'select id from student where id=?' //sql 쿼리문-> id 에맞는 row들고 오고싶다
    db.query(sql, [user_id], function (err, rows, fields) {
        console.log(rows);
        let checkid = new Object();
        checkid.tf = false;              // 이 아이디를 사용가능 한가요??

        if (rows[0] === undefined) { //중복되는게 없으면
            checkid.tf = true;  //없음 사용가능
            res.send(checkid);  //다시 클라이언트로 보낸다 checkid 객체를
        }
        else {
            checkid.tf = false; // 중복됨 사용x
            res.send(checkid);
        }
    })
    const param = [req.body.id, req.body.passwd, req.body.name, req.body.grade, req.body.phone_number];
    bcrypt.hash(param[1], saltRounds, (err, hash) => {
        param[1] = hash;
        db.query('INSERT INTO student(`id`, `passwd`, `name`, `grade`, `phone_number`) VALUES (?,?,?,?,?)', param, (err, row) => {
            if (err) console.log(err);
        });
    });
    res.end();
});

var loginState = false; // login되면 true, logout 혹은 초기값은 false
// 로그인 GET
router.get('/login', function (req, res, next) {
    console.log('in -> /api/home/login');
    let session = req.session;
    if (loginState == false) {
        res.send('{"state": false}'); // 보낼 때는 json 형식으로 만.
    } else {
        res.send('{"state": true}');
    }
});

// login function (main -> login clink)
router.post('/login', (req, res, next) => {
    const param = [req.body.id, req.body.passwd]
    console.log('Login Data:', (param));
    db.query('SELECT id, passwd FROM Student WHERE id=?', param[0], (err, row) => {
        if (err) {
            console.log('ERROR: DB: Login:')
            console.log(err)
        }

        if (row.length > 0) {
            //ID가 존재합니다.
            bcrypt.compare(param[1], row[0].passwd, (error, result) => {
                if (result) {
                    req.session.loginData = req.body
                    req.session.save(error => {
                        if (error) {
                            console.log('Error: Login: save session')
                            console.log(error)
                        }
                    })
                    console.log('success');
                    loginState = true;
                } else {
                    console.log('Error: Login: can not find id')
                    console.log('fail');
                    loginState = false;
                }
            })
        } else {
            console.log('ID가 존재하지 않습니다.')
        }
    })
    res.end()
});


router.get('/loginCheck', (req, res) => {
    if (req.session.loginData) {
        res.send({ loggdeIn: true, loginData: req.session.loginData })
    } else {
        res.send({ loggedIn: false })
    }
})

// 로그아웃
router.get("/logout", function (req, res, next) {
    req.session.destroy();
    res.clearCookie('loginData');
    res.redirect("/user/login")
})

module.exports = router;