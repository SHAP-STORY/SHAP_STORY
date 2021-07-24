"use strict";

const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// mysql
const db = require('../../db/database');
// 비밀번호 암호화 bcrypt hash 함수
const bcrypt = require('bcrypt');
const saltRounds = 10; //ANCHOR passwd varchar(255)로 바꿔줌.(그 전에걸로 했을 때 data가 길다는 오류가 뜸.)

const port = 3000;
// home.ctrl을 불러와서 그 안에 객체들 이용.
const ctrl = require("./home.ctrl");

router.get('/', function(req, res, next) {
    if(req.cookies){
        console.log(req.cookies);
    }
    res.send("환영합니다 ~");
});

//register 화면
router.get('/register', ctrl.register);

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

// 로그인 GET
router.get('/login', function(req, res, next) {
    let session = req.session;

    res.render("user/login", {
        session : session
    });
});


// login function (main -> login clink)
router.post('/login', (req, res, next) => {
    console.log('Login Data:', (req.body));
    param = [req.body.id, req.body.pw]
    db.query('SELECT id, passwd FROM student WHERE id=?', param[0], (err, row) => {
        if(err) {
            console.log('ERROR: DB: Login:')
            console.log(err)
        }
        if(row.length > 0){
            //ID가 존재합니다.
            bcrypt.compare(param[1], row[0].pw, (error, result) =>{
                if(result){
                    console.log(req.seesion.loginData)
                    //req.seesion.loginData = //유저데이터
                    req.session.save(error => {if(error) {
                        console,log('Error: Login: save session')
                        console.log(error)
                    }}) 
                    res.json({message: 'success'})                
                }else{
                    console,log('Error: Login: can not find id')
                    res.json({message: 'fail'})
                }
            })
        }else {
            console.log('ID가 존재하지 않습니다.')
        }
    })
    res.end()
})


router.get('/loginCheck', (req,res) =>{
    if(req.session.loginData){
        res.send({loggdeIn: true, loginData: req.session.loginData})
    }else{
        res.send({loggedIn: false})
    }
})

// 로그아웃
router.get("/logout", function(req,res,next){
    req.session.destroy();
    res.clearCookie('loginData');  
    res.redirect("/user/login")
  })

module.exports = router;