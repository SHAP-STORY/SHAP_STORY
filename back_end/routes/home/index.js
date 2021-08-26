"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// mysql
const db = require('../../db/database');
//user_info
var user_info = require('../varient');

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
        db.query('INSERT INTO Student(`id`, `passwd`, `name`, `grade`, `phone_number`) VALUES (?,?,?,?,?)', param, (err, row) => {
            if (err) console.log(err);
        });
    });
    res.end();
});

// 로그인 GET
router.get('/login', function (req, res, next) {
    let session = req.session;
    const data = {
        'state': user_info[0],
        'name': user_info[2]
    }
    res.send(data);
});

// login function (main -> login clink)
router.post('/login', (req, res, next) => {
    const param = [req.body.id, req.body.passwd]
    console.log('Login Data:', (param));

    db.query('SELECT id, passwd, name, img FROM Student WHERE id=?', param[0], (err, row) => {
        if (err) {
            console.log('ERROR: Connect DB')
            console.log(err)
        }

        if (row.length > 0) {
            //ID가 존재합니다.
            console.log('Result: ',row);
            bcrypt.compare(param[1], row[0].passwd, (error, result) =>{
                if(result){
                    req.session.loginData = req.body
                    req.session.save(error => {if(error) {
                        console.log('Error: Login: save session')
                        console.log(error)
                    }}) 
                    console.log('success');
                    user_info[1] = param[0];
                    user_info[2] = row[0].name;
                    user_info[0] = true;
                    console.log(user_info);
                    const data = {
                        'loginstate': true,
                        'name': row[0].name,
                        'img': row[0].img
                    }
                    res.send(data);          
                }else{
                    console.log('Error: Login: can not find id')
                    console.log('fail');
                    user_info[0] = false;
                }
            })
        } else {
            console.log('ID가 존재하지 않습니다.')
        }
    })
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