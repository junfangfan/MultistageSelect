var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// 打印请求日志
//app.use(logger('dev'));

// 解析请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//// 静态资源部署
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);



module.exports = app;
app.listen(3000);