"use strict";

// posts.js 의 create연결
const show = (req, res) => {
    res.render("posts/show");
};

//외부에서 사용할 수 있도록 내보내는 것 
module.exports = {
    show,
};