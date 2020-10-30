
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

            console.log("UPDATE RANK!!");

    })
}

setInterval(rank,180000);