"use strict";

const express = require('express');
const router = express.Router();

// posts.ctrl을 불러와서 그 안에 객체들 이용.
const ctrl = require("./posts.ctrl");

//show 화면
router.get('/', ctrl.show);

module.exports = router;