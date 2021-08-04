"use strict";

const express = require('express');
const router = express.Router();

const home = require('./home/index');
const posts = require('./posts/index');

router.use('/home', home);
router.use('/posts', posts);

module.exports = router;