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

  var H = now.getHours()-13;// time hour now
  var Ho = now.getHours()-14; //time hour now -1
  H = parseInt(H)
  Ho = parseInt(Ho);

  if(H < 0){
    H = H+24
  }
  if(Ho < 0){
    Ho = Ho+24
  }

function postdata() {
      // AND plg.adm1_th = 'เชียงราย' AND plg.adm2_th = 'เมืองเชียงราย'
      // AND gid = '400'
      // AND pts.acq_time between '"+H+":00:00' AND '"+Ho+":00:00'
      post.query("SELECT plg.adm2_th,pts.latitude,pts.longitude,pts.frp,pts.brightness,pts.scan,pts.bright_t31,pts.confidence,pts.acq_time \
      FROM thailand plg JOIN FIRMS_auto pts \
      ON ST_Within(ST_MakePoint(pts.longitude, pts.latitude), plg.geom) AND \
      pts.satellite_date = '"+date_req+"' AND pts.acq_time between '"+Ho+":00:00' AND '"+H+":00:00'")
      .then(results => {
          ai.dataa(results.rows)
          for(var index in ai.data){
            if(ai.data[index].ans == 0){
              if(((ai.data[index].confidence == 'high')||(ai.data[index].confidence>=80))){
                if(ai.data[index].confidence == 'high'){
                  ai.data[index].confidence = 80;
                }
             }else if((ai.data[index].confidence == 'nominal')||(ai.data[index].confidence>=50)){
                if(ai.data[index].confidence == 'nominal'){
                  ai.data[index].confidence = 50;
                }
             }else if((ai.data[index].confidence == 'low')||(ai.data[index].confidence>=20)){
                if(ai.data[index].confidence == 'low'){
                  ai.data[index].confidence = 20;
                }
             }else{
                ai.data[index].confidence = 0;
              }
            }else{
              if(((ai.data[index].confidence == 'high')||(ai.data[index].confidence>=80))){
                if(ai.data[index].confidence == 'high'){
                  ai.data[index].confidence = 80;
                }
              }else if((ai.data[index].confidence == 'nominal')||(ai.data[index].confidence>=30)){
                if(ai.data[index].confidence == 'nominal'){
                  ai.data[index].confidence = 50;
                }
              }else{
                if(ai.data[index].confidence == 'low'){
                  ai.data[index].confidence = 20;
                }
              }
            }
          }// end for
          var fire = ai.data;
          linebot(fire);
        }) // end query ai
        
}

function linebot(data){
    for(var index in data){
        var datatext = data[index];
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
                  '\nโอกาสที่จะเกิดไฟป่า :'+datatext.confidence+" %"
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

setInterval(postdata, 3600000)


module.exports = router;