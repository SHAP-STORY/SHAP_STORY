"use strict";

const express = require('express');
const router = express.Router();

const home = require('./home/index');
const posts = require('./posts/index');
const mypage = require("./mypage/index");

router.use('/api/home', home);
router.use('/api/posts', posts);
router.use('/api/mypage', mypage);

module.exports = router;