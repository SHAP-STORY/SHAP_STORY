"use strict";
//NOTE package.json에 script -> node ./bin/www.js 를 npm start로 사용하도록 함.

const app = require("../app");
const port = 5000;

app.listen(port, () => {
    console.log('app listening ${port}');
});