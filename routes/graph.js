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

var Bangkok = new Date().toLocaleString('en-TH', { timeZone: 'Asia/Bangkok' })
var now = new Date(Bangkok);
var D = now.getDate();
var M = now.getMonth()+1;
var Y = now.getFullYear();
if(M>=1 && M<=9){
    M = '0'+M;
    }
if(D>=1 && D<=9){
    D = '0'+ D;
    }

if(M==02){
    if ( (!(Y % 4) && Y % 100) || !(Y % 400)){
        day = 29;
}else{
        day = 28;
    }
}else if(M==04||M==06||M==09||M==11){
    day = 30;
}else if(M==01||M==03||M==05||M==07||M==08||M==10||M==12){
    day = 31;
}   

var datetime = Y+'-'+M+'-'+D;  

/* GET users listing. */
router.get('/', function(req, res) {
  post.query("SELECT DISTINCT * FROM count_ym where year_name = '"+Y+"' ORDER BY month_name ASC")
  .then(results => {
          count= JSON.stringify(results.rows);
          
          post.query("SELECT COUNT(DISTINCT (plg.adm2_th,plg.adm1_th,pts.latitude,pts.longitude,acq_time+'7 hour'::interval,pts.satellite_date)) \
          FROM thailand plg JOIN FIRMS_auto pts \
          ON ST_Within(ST_MakePoint(pts.longitude, pts.latitude), plg.geom) \
          AND pts.satellite_date = '"+datetime+"' \
          ")
          .then(results =>  {
              count_day= JSON.stringify(results.rows);

              post.query("SELECT DISTINCT * FROM count_rank ORDER BY rank ASC \
               ")
              .then(results => {
                  count_data = JSON.stringify(results.rows);
                  res.render('graph',{count: count, count_day: count_day,rank: count_data});
                      })
                })
          })
});


module.exports = router;
