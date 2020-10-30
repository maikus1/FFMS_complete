var express = require('express');
var router = express.Router();

const {Client} = require('pg');

const post = new Client({
  user: "postgres",
  password: "1234",
  host: "127.0.0.1",
  port: "5432",
  database: "postgres"
});// connect database

post.connect();

var Bangkok = new Date().toLocaleString('en-TH', { timeZone: 'Asia/Bangkok' })//time zone
var now = new Date(Bangkok);
var Y = now.getFullYear();
var Yold = Y-1; // year before

router.get('/', function(req, res) {
  post.query("SELECT DISTINCT * FROM count_ym where year_name between '"+Yold+"' AND '"+Y+"' ORDER BY year_name,month_name ASC")
  .then(results => {
    //query count new year and before year
    res.render('graphTrend',{count: JSON.stringify(results.rows)});
  })//end query count new year and before year
});


module.exports = router;
