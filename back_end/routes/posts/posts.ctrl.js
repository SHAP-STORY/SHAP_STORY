"use strict";
// mysql
const db = require('../../db/database');

// posts.js 의 create연결
const show = (req, res) => {
    var query = db.query('SELECT `index`,`title`,`student_id`,`date`, `body` FROM Post', function (err, rows) {
        if (err) {
            console.log(err) // 만약 에러값이 존재한다면 로그에 표시합니다.
        } else {
            console.log('rows :' + rows);
            // res.render('posts/show', { title: 'Board List', rows: rows }); // view 디렉토리에 있는 list 파일로 이동합니다.
            res.send(rows);
        }
    });
};

// POST 방식의 요청이 들어왔을 때 데이터를 DB에 저장하고 해당하는 DB의 IDX값을
// 가지고 온 후 Read 페이지로 이동합니다.
const write = (req, res) => {
    var body = req.body;
    var student_id = body.student_id;
    var index = body.index;
    var title = req.body.title;
    var content = req.body.content;
    db.beginTransaction(function (err) {
        if (err) console.log(err);
        db.query('INSERT INTO Post (`title`,`student_id`,`body`) VALUES(?,?,?)'
            , [title, student_id, content]
            , function (err) {
                if (err) {
                    /* 이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.*/
                    console.log(err);
                    db.rollback(function () {
                        console.error('rollback error1');
                    })
                }
                db.query('SELECT LAST_INSERT_ID()', function (err, rows) {
                    if (err) {
                        /* 이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.*/
                        console.log(err);
                        db.rollback(function () {
                            console.error('rollback error1');
                        })
                    }
                    else {
                        db.commit(function (err) {
                            if (err) console.log(err);
                            console.log("row : " + rows);
                            // res.send(rows[0].index);
                        })
                    }
                })
            })
    })
};

const create = (req, res) => {
    // res.render("posts/create", { title: '글 쓰기 페이지' });
    console.log('in -> /api/posts/create');
};

const read = (req, res) => {
    /* GET 방식의 연결이므로 read 페이지 조회에 필요한 idx 값이 url 주소에 포함되어 전송됩니다.
     이 idx값을 참조하여 DB에서 해당하는 정보를 가지고 옵니다.
    * url에서 idx 값을 가져오기 위해 request 객체의 params 객체를 통해 idx값을 가지고 옵니다.*/
    // var index = question_info[0];
    var index = req.body.index;
    console.log("index : " + index);
    res.send(req.params.index)
    db.beginTransaction(function (err) {
        if (err) console.log(err);
        db.query('SELECT `index`,`title`,`content`,`student_id`,`date`' +
            'FROM Post WHERE index=?', [index], function (err, results, field) {
                if (err) {
                    /* 이 쿼리문에서 에러가 발생했을때는 쿼리문의 수행을 취소하고 롤백합니다.*/
                    console.log(err);
                    db.rollback(function () {
                        console.error('rollback error2');
                    })
                }
                else {
                    db.commit(function (err) {
                        if (err) console.log(err);
                        console.log("row : " + results);
                        // res.render('posts/read', { title: title, rows: results });
                        res.send(results);
                    })
                }
            })
    })
};

//외부에서 사용할 수 있도록 내보내는 것 
module.exports = {
    show,
    create,
    write,
    read,
};