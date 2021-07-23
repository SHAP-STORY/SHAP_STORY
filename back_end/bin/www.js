  
//NOTE npm start로 시작 가능
const app = require("../app");
const port = 3000;

app.listen(port, () => {
    console.log('app listening ${port}');
});