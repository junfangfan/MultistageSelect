var express = require('express');
var router = express.Router();


// 引入虚拟数据，此处不用mongodb,db模拟了json数据
var db = require('./db.js');


router.get('/get', function(req, res) {
  console.log('有请求进来了');
  res.json(db.data);
});

module.exports = router;
