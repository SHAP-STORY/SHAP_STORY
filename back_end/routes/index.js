"use strict";

const express = require('express');
const router = express.Router();

const home = require('./home/index');
const posts = require('./posts/index');
const mypage = require("./routes/mypage");

router.use('/home', home);
router.use('/posts', posts);
app.use('/mypage', mypage);

module.exports = router;
