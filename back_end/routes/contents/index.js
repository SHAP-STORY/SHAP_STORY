"use strict";

const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next) {
    if(req.cookies){
        console.log(req.cookies);
    }
    res.render("home/home");
});
//show 화면
router.get('/ant', function(req,res,next) {
    res.render("contents/개미와베짱이");
});

router.get('/aladdin', function(req,res,next){
    res.render("contents/알라딘");
});

module.exports = router;