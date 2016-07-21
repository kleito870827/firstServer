var express = require('express');
var app = express();
var session = require('express-re')
app.get('/', function(req, res){
  res.end('<h1>hello world</h1>');
});
app.get('/admin', function(req, res){
  res.end('<h1>Ho Ho</h1>');
});
app.get('/users/:id', function(req, res){
  res.end("you requested user whith id:"+req.params.id);
});
app.listen(7777, () => console.log("server listening...."));
