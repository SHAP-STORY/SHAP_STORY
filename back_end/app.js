"use strict";
// module
var express = require('express');
var app = express();

// port number
const port = 3000;

// routing
const home = require("./routes/home");

//app setting
app.set("views", "./views");
app.set("view engine", "ejs");

//use -> 미들웨어 등록해주는 메서드
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", home);



module.exports = app;
