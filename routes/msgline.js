var express = require('express');
var router = express.Router();
const request = require('request')
const {Client} = require('pg');
var ai = require('../model/ai')

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

    var date_req = Y+'-'+M+'-'+D; 

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

var timehour = now.getHours();
var timemin = now.getMinutes()-30;
var timehourold;
var timeminold;
var checktext = [];

timeminold = timemin-30;

if(timeminold < 0){
  timehourold = timehour-1;
  timeminold = timeminold+60;
  if(timehourold < 0){
    timehourold = 23;
  }
}else{
  timehourold = timehour;
}

function postdata() {
    post.query("SELECT plg.adm2_th,pts.latitude,pts.longitude,pts.frp,pts.brightness,pts.scan,pts.bright_t31,pts.confidence \
                FROM thailand plg JOIN FIRMS_auto pts \
                ON ST_Within(ST_MakePoint(pts.longitude, pts.latitude), plg.geom) AND \
                pts.satellite_date = '"+date_req+"' AND plg.adm1_th = 'เชียงราย' AND pts.insert_time between '"+timehourold+":"+timeminold+":00' AND '"+timehour+":"+timemin+":00'")
                .then(results => {
                var data = results.rows;
                ai.dataa(results.rows) 
                  for(var index in data){
                    if((data[index].confidence == 'high')||(data[index].confidence >= 80)){
                      checktext[index] = 'โอกาสเกิดไฟสูง';
                    }else if((data[index].confidence == 'nominal')||(data[index].confidence >= 30)){
                      checktext[index] = 'โอกาสปานกลาง';
                    }else{
                      checktext[index] = 'โอกาสต่ำ ';
                    }
                  }
                  linebot(data,checktext)
            })
}

function linebot(data,check){
    for(var index in data){
        var datatext = data[index];
        var checktext = check[index];
        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
              bearer: 'DSSEVDnSTKai6D7LlhrhBk6y8zCS8CgZnQaaED6PyHr', //token
            },
            form: {
              message: 'อำเภอ : ' +datatext.adm2_th+
                  '\nละติจูด : ' +datatext.latitude+
                  '\nลองจิจูด : ' +datatext.longitude+
              '\nไฟป่าที่จะเกิด :'+checktext
              //ข้อความที่จะส่ง
            },
          }, (err, httpResponse, body) => {
            if (err) {
              console.log(err)
            } else {
              console.log(body)
            }
          })
    }
}

setInterval(postdata, 1800000)


module.exports = router;