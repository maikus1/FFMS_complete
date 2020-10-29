const request = require('request');
const fs = require('fs');
const csv = require("fast-csv");

const {Client} = require('pg');

const post = new Client({
    user: "postgres",
    password: "1234",
    host: "127.0.0.1",
    port: "5432",
    database: "postgres"
  });// connect database

post.connect();

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0, 10);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var dayr = Math.floor(diff / oneDay);
dayr = dayr;//milisec of year
var Y = now.getFullYear();

function noaa_auto() {
    const noaa_url = 'https://nrt3.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/noaa-20-viirs-c2/SouthEast_Asia/J1_VIIRS_C2_SouthEast_Asia_VJ114IMGTDL_NRT_'+Y+dayr+'.txt';
    request({
        url : noaa_url,
        auth : {
            'bearer' : 'CA37327C-99C9-11EA-8456-B99ABD5267C8'
        }
    },function(err,res,body){
        fs.writeFile('./database/data_fire/noaa_auto.txt',body,function(err){
            if(err) {
                return console.log(err);
            }
            console.log("Savee noaa!!!");
        });

        const csvStream_noaa = fs.createReadStream('./database/data_fire/noaa_auto.txt')
        .pipe(csv.parse({ headers: true }))
        .on("data", function(record) {
            csvStream_noaa.pause();

            let counter = 0;
            if(counter < 5000)
            {
                let latitude = record.latitude;
                let longitude = record.longitude;
                let brightness = record.bright_ti4;
                let scan = record.scan;
                let track = record.track;
                let acq_date = record.acq_date;
                let acq_time = record.acq_time;
                let satellite = record.satellite;
                let confidence = record.confidence;
                let version = record.version;
                let bright_t31 = record.bright_ti5;
                let frp = record.frp;
                let daynight = record.daynight;

                post.query("INSERT INTO FIRMS_auto(latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,confidence,version,bright_t31,frp,daynight) \
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", [latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,confidence,version,bright_t31,frp,daynight], function(err){
                    if(err)
                    {
                        console.log(err);
                    }
                });
            ++counter;
            }
        csvStream_noaa.resume();
        }).on("end", function(){
            console.log("Success noaa!!!");
        }).on("error", function(err){
            console.log(err);
        });//end insert database
    })//end request noaa_auto
}// end function noaa

function viirs_auto() {
    const viirs_url = 'https://nrt3.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/viirs/SouthEast_Asia/VIIRS_I_SouthEast_Asia_VNP14IMGTDL_NRT_'+Y+dayr+'.txt';
    request({
        url : viirs_url,
        auth : {
            'bearer' : 'CA37327C-99C9-11EA-8456-B99ABD5267C8'
        }
    },function(err,res,body){
        fs.writeFile('./database/data_fire/viirs_auto.txt',body,function(err){
            if(err) {
                return console.log(err);
            }
            console.log("Savee viirs!!!");
        });

        const csvStream_viirs = fs.createReadStream('./database/data_fire/viirs_auto.txt')
        .pipe(csv.parse({ headers: true }))
        .on("data", function(record) {
            csvStream_viirs.pause();

            let counter = 0;
            if(counter < 5000)
            {
                let latitude = record.latitude;
                let longitude = record.longitude;
                let brightness = record.bright_ti4;
                let scan = record.scan;
                let track = record.track;
                let acq_date = record.acq_date;
                let acq_time = record.acq_time;
                let satellite = record.satellite;
                let confidence = record.confidence;
                let version = record.version;
                let bright_t31 = record.bright_ti5;
                let frp = record.frp;
                let daynight = record.daynight;

                post.query("INSERT INTO FIRMS_auto(latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,confidence,version,bright_t31,frp,daynight) \
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", [latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,confidence,version,bright_t31,frp,daynight], function(err){
                    if(err)
                    {
                        console.log(err);
                    }
                });
            ++counter;
            }
        csvStream_viirs.resume();
        }).on("end", function(){
            console.log("Success viirs!!");
        }).on("error", function(err){
            console.log(err);
        });//end insert database
    })//end request viirs_auto
}// end function viirs

function suomi_auto() {
    const suomi_url = 'https://nrt3.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/suomi-npp-viirs-c2/SouthEast_Asia/SUOMI_VIIRS_C2_SouthEast_Asia_VNP14IMGTDL_NRT_'+Y+dayr+'.txt';
    request({
        url : suomi_url,
        auth : {
            'bearer' : 'CA37327C-99C9-11EA-8456-B99ABD5267C8'
        }
    },function(err,res,body){
        fs.writeFile('./database/data_fire/suomi_auto.txt',body,function(err){
            if(err) {
                return console.log(err);
            }
            console.log("Savee suomi!!!");
        });

        const csvStream_suomi = fs.createReadStream('./database/data_fire/suomi_auto.txt')
        .pipe(csv.parse({ headers: true }))
        .on("data", function(record) {
            csvStream_suomi.pause();

            let counter = 0;
            if(counter < 5000)
            {
                let latitude = record.latitude;
                let longitude = record.longitude;
                let brightness = record.bright_ti4;
                let scan = record.scan;
                let track = record.track;
                let acq_date = record.acq_date;
                let acq_time = record.acq_time;
                let satellite = record.satellite;
                let confidence = record.confidence;
                let version = record.version;
                let bright_t31 = record.bright_ti5;
                let frp = record.frp;
                let daynight = record.daynight;

                post.query("INSERT INTO FIRMS_auto(latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,confidence,version,bright_t31,frp,daynight) \
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", [latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,confidence,version,bright_t31,frp,daynight], function(err){
                    if(err)
                    {
                        console.log(err);
                    }
                });
            ++counter;
            }
        csvStream_suomi.resume();
        }).on("end", function(){
            console.log("Success suomi!!");
        }).on("error", function(err){
            console.log(err);
        });//end insert database
    })//end request suomi_auto
}// end function suomi

function modis_c6_auto() {
    const modis_c6_url = 'https://nrt3.modaps.eosdis.nasa.gov/api/v2/content/archives/FIRMS/c6/SouthEast_Asia/MODIS_C6_SouthEast_Asia_MCD14DL_NRT_'+Y+dayr+'.txt';
    request({
        url : modis_c6_url,
        auth : {
            'bearer' : 'CA37327C-99C9-11EA-8456-B99ABD5267C8'
        }
    },function(err,res,body){
        fs.writeFile('./database/data_fire/modis_c6_auto.txt',body,function(err){
            if(err) {
                return console.log(err);
            }
            console.log("Savee modis!!!");
        });
        const csvStream_modis = fs.createReadStream('./database/data_fire/modis_c6_auto.txt')
        .pipe(csv.parse({ headers: true }))
        .on("data", function(record) {
            csvStream_modis.pause();

            let counter = 0;
            if(counter < 5000)
            {
                let latitude = record.latitude;
                let longitude = record.longitude;
                let brightness = record.brightness;
                let scan = record.scan;
                let track = record.track;
                let acq_date = record.acq_date;
                let acq_time = record.acq_time;
                let satellite = record.satellite;
                let confidence = record.confidence;
                let version = record.version;
                let bright_t31 = record.bright_t31;
                let frp = record.frp;
                let daynight = record.daynight;

                post.query("INSERT INTO FIRMS_auto(latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,confidence,version,bright_t31,frp,daynight) \
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)", [latitude,longitude,brightness,scan,track,acq_date,acq_time,satellite,confidence,version,bright_t31,frp,daynight], function(err){
                    if(err)
                    {
                        console.log(err);
                    }
                });
            ++counter;
            }
        csvStream_modis.resume();
        }).on("end", function(){
            console.log("Success modis!!");
        }).on("error", function(err){
            console.log(err);
        });//end insert database
    })//end request modis_c6_auto
}// end function modis_c6


function data(){
    setInterval(noaa_auto, 300000);
    setInterval(viirs_auto, 300000);
    setInterval(suomi_auto, 300000);
    setInterval(modis_c6_auto, 300000);
    // console.log(dayr);
}

data(); 