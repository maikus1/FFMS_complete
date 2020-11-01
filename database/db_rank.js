
const {Client} = require('pg');

var Bangkok = new Date().toLocaleString("th", {timeZone: "Asia/Bangkok"});
var now = new Date();
var Y = now.getFullYear();

const post = new Client({
    user: "postgres",
    password: "1234",
    host: "127.0.0.1",
    port: "5432",
    database: "postgres"
  });// connect database

post.connect();

function checktime(){
  var date_req;
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
  return date_req
}

function rank(){
    post.query("SELECT DISTINCT COUNT(*) as count_data,plg.adm1_th \
                FROM thailand plg JOIN FIRMS_auto pts \
                ON ST_Within(ST_MakePoint(pts.longitude, pts.latitude), plg.geom) \
                AND pts.satellite_date BETWEEN '"+Y+"-01-01' AND '"+Y+"-12-31' GROUP BY plg.adm1_th ORDER BY count_data DESC limit 5 \
                ")
                .then(results => {

            count= results.rows;
            post.query("UPDATE count_rank SET province = '"+count[0].adm1_th+"' where rank = 1 ");
            post.query("UPDATE count_rank SET count = '"+count[0].count_data+"' where rank = 1 ");

            post.query("UPDATE count_rank SET province = '"+count[1].adm1_th+"' where rank = 2 ");
            post.query("UPDATE count_rank SET count = '"+count[1].count_data+"' where rank = 2 ");

            post.query("UPDATE count_rank SET province = '"+count[2].adm1_th+"' where rank = 3 ");
            post.query("UPDATE count_rank SET count = '"+count[2].count_data+"' where rank = 3 ");

            post.query("UPDATE count_rank SET province = '"+count[3].adm1_th+"' where rank = 4 ");
            post.query("UPDATE count_rank SET count = '"+count[3].count_data+"' where rank = 4 ");

            post.query("UPDATE count_rank SET province = '"+count[4].adm1_th+"' where rank = 5 ");
            post.query("UPDATE count_rank SET count = '"+count[4].count_data+"' where rank = 5 ");

            console.log("UPDATE RANK time : "+checktime());

    })
}

setInterval(rank,180000);