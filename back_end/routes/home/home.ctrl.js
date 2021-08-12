"use strict";


const home = (req, res) => {
    if (req.cookies) {
        console.log(req.cookies);
    }
    res.send("환영합니다 ~");
}

// index.js 의 register 연결
const register = (req, res, next) => {
    res.render("home/register");
};

const login = (req, res) => {
    res.render("user/login");
};

//외부에서 사용할 수 있도록 내보내는 것 
module.exports = {
    home,
    register,
    login,
};