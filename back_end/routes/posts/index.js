"use strict";

const express = require('express');
const router = express.Router();

// mysql
const db = require('../../db/database');

// posts.ctrl을 불러와서 그 안에 객체들 이용.
const ctrl = require("./posts.ctrl");

//show 화면
router.get('/', ctrl.show);

router.get('/create', ctrl.create);

router.post('/create', ctrl.write);

router.get('/read/:idx', ctrl.read);

module.exports = router;