var express = require('express'); 
var app = express(); 

const port = 3000;

app.listen(port, function() {
    console.log('app listening ${port}')
})

app.get('/', function(req, res){
    res.status(200).json({'msg' : 'Hello World'})
})
