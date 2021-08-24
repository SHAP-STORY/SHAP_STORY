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

router.get('/', function(req, res, next) {
    if(req.cookies){
        console.log(req.cookies);
    }
    res.render("home/home");
});


//register 화면
router.get('/register', ctrl.register);

router.post('/register', (req, res, next) => {
    console.log(req.body);
    const param = [req.body.id, req.body.passwd, req.body.name, req.body.grade, req.body.phone_number]
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
    if(loginState == false){
        res.send('{"state": false}'); // 보낼 때는 json 형식으로 만.
    }else{
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
            bcrypt.compare(param[1], row[0].passwd, (error, result) =>{
                if(result){
                    req.session.loginData = req.body
                    req.session.save(error => {if(error) {
                        console.log('Error: Login: save session')
                        console.log(error)
                    }}) 
                    console.log('success');
                    loginState = true;          
                }else{
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
})


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