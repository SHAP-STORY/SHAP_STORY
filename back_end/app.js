"use strict";

// module
var express = require('express');
var app = express();

//session module
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const axios = require('axios');

// Access-Control-Allow-Origin 오류를 방지하기 위해
app.use(cors({
    origin: true,// CHECK true보다는 url을 적는 것이 좋다
    credentials: true
}))

app.use(cookieParser()); // 쿠키 추출을 쉽도록 해주는 모듈

app.use(
    session({
        key: "loginData", //session이 저장될 키 값
        secret: "testSecret", // 서명에 필요한 값
        resave: false, // 수정이 되지 않아도 다시 저장할 것인지
        saveUninitialized: true,
        cookie: {
            maxAge: 60 * 60 * 24000, // 쿠키 유효기간 24시간
        }
    })
)
axios.defaults.withCredentials = true //react 프레임 워크 사용시 axios를 이용한 데이터 처리
module.exports = app;

// port number
const port = 5000;

// routing

var routes = require('./routes');

//app setting
app.set("views", "./views");
app.set("view engine", "ejs");

//use -> 미들웨어 등록해주는 메서드
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

module.exports = app;
