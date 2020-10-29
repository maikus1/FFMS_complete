const {Client} = require('pg');

const post = new Client({
    user: "postgres",
    password: "1234",
    host: "127.0.0.1",
    port: "5432",
    database: "postgres"
  });// connect database


post.connect();

function countm() {
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


    post.query("UPDATE FIRMS_auto SET satellite_date = acq_date WHERE acq_time >= '00:00:00' AND acq_time <= '16:59:59' AND acq_date BETWEEN '"+Y+"-"+M+"-01' AND '"+Y+"-"+M+"-"+D+"';");
    post.query("UPDATE FIRMS_auto SET satellite_date = acq_date + integer '1' WHERE acq_time >= '17:00:00' AND acq_time <= '23:59:59' AND acq_date BETWEEN '"+Y+"-"+M+"-01' AND '"+Y+"-"+M+"-"+D+"';");

    post.query("SELECT * FROM count_ym WHERE year_name = '"+Y+"' ")
        .then(results => {
        check_y = results.rows;
            if(check_y === undefined || check_y.length == 0){
                for(let ii = 1; ii <=12; ii++){
                    if(ii<10){
                        let nn = ii.toString();
                        post.query("INSERT INTO count_ym (year_name,month_name) VALUES("+Y+",'0"+nn+"')");
                    }else{
                        let nn = ii.toString();
                        post.query("INSERT INTO count_ym (year_name,month_name) VALUES("+Y+","+nn+")");
                    }
                    console.log("INSERT month and year Success!!");
                }    
            }
            })

        post.query("SELECT COUNT(DISTINCT (plg.adm2_th,plg.adm1_th,pts.latitude,pts.longitude,acq_time,pts.satellite_date)) \
        FROM thailand plg JOIN FIRMS_auto pts \
        ON ST_Within(ST_MakePoint(pts.longitude, pts.latitude), plg.geom) \
        AND pts.satellite_date BETWEEN '"+Y+"-"+M+"-01' AND '"+Y+"-"+M+"-"+day+"' \
        ")
        .then(results =>  {
            count_month= results.rows;
            post.query("UPDATE count_ym SET month = "+count_month[0].count+" where month_name = '"+M+"' AND year_name = '"+Y+"' ");
            console.log("UPDATE count_month "+M+" : "+count_month[0].count);
            })

}//end FIRMS_auto

function county(){
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

    post.query("SELECT COUNT(DISTINCT (plg.adm2_th,plg.adm1_th,pts.latitude,pts.longitude,acq_time,pts.satellite_date)) \
    FROM thailand plg JOIN FIRMS_auto pts \
    ON ST_Within(ST_MakePoint(pts.longitude, pts.latitude), plg.geom) \
    AND pts.satellite_date BETWEEN '"+Y+"-01-01' AND '"+Y+"-12-31' \
    ")
    .then(results => {
        count_year= results.rows;
        post.query("UPDATE count_ym SET year = "+count_year[0].count+" where month_name BETWEEN '01' AND '12' AND year_name = '"+Y+"' ");
        console.log("count_year "+Y+" : "+count_year[0].count);
        })
}

setInterval(countm,300000);
setInterval(county,300000);
