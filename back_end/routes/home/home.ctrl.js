"use strict";

// index.js 의 register 연결
const register = (req, res) => {
    res.render("home/register");
};

const login = (req, res) => {
    res.render("home/login");
};

//외부에서 사용할 수 있도록 내보내는 것 
module.exports = {
    register, 
    login,

};