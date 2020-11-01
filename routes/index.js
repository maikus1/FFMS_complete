var express = require('express');
var router = express.Router();
var ai = require('../model/ai')

const {Client} = require('pg');

const post = new Client({
    user: "postgres",
    password: "1234",
    host: "127.0.0.1",
    port: "5432",
    database: "postgres"
  });// connect database

post.connect();

/* GET home page. */
router.get('/', function(req, res) {
        var checks = undefined;
        var date_req = req.query.date;// require date from home page
        var Bangkok = new Date().toLocaleString('en-TH', { timeZone: 'Asia/Bangkok' })//time zone
        var now = new Date(Bangkok);
        var D = now.getDate();
        var M = now.getMonth()+1;
        var Y = now.getFullYear();
        // checks day,month,year
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
        
        if(date_req === undefined){
            date_req = Y+'-'+M+'-'+D;  // checks day no undefined
        }else{
            date_req = date_req; // day now
        }

        post.query("SELECT DISTINCT pts.ans,pts.brightness,pts.bright_t31,pts.scan,pts.track,pts.frp,pts.confidence,plg.adm2_th,plg.adm1_th,pts.latitude,pts.longitude,acq_time+'7 hour'::interval AS insert_time,to_char(pts.satellite_date, 'YYYY-MM-DD') AS date,pts.satellite \
        FROM thailand plg JOIN FIRMS_auto pts \
        ON ST_Within(ST_MakePoint(pts.longitude, pts.latitude), plg.geom)\
        AND pts.satellite_date = '"+date_req+"'\
        ")
        .then(results => {
            //query data fire
            ai.dataa(results.rows)// calculate ai neural network
            var fire = JSON.stringify(ai.data)
            res.render('index',{ data_fire :fire,date_req : date_req});
            

        }) // end query data
});

module.exports = router

