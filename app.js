var createError = require('http-errors');
var express = require('express');
var path = require('path');
var db_insert = require('./database/db_insertdata');
var db_up = require('./database/db_update');
var db_rank = require('./database/db_rank');
var ai = require('./model/ai')
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var northRouter = require('./routes/north');
var graphRouter = require('./routes/graph');
var graphTrendRouter = require('./routes/graphTrend');
var webhookRouter = require('./routes/msgline');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/north', northRouter);
app.use('/graph', graphRouter);
app.use('/graphTrend', graphTrendRouter);
app.use('/msg', webhookRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
