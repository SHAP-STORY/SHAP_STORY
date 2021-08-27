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

router.post('/basic/content', function(req, res, next) {
    console.log(req.body.id)
    db.query("SELECT contents, title FROM BasicSubject where student_id= ? AND TYPE='advanced'",[req.body.id], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

router.post('/basic/lessionrate', function(req, res, next) {
    console.log(req.body.id)
    db.query("SELECT contents, title FROM BasicSubject where student_id= ? AND TYPE='advanced'",[req.body.id], function (error, results, fields) {
        if (error) {
            console.log(error);
        }
        res.send(results);
    });
});

module.exports = router; // 꼭 넣어주기 아니면 에러가 난다!