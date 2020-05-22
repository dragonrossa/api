var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


//Index route
var indexRouter = require('./routes/index');


//Kitchen routes
var postKitchenRouter = require('./routes/kitchen/post')
var downloadKitchenRouter = require('./routes/kitchen/download')
var deleteKitchenRouter = require('./routes/kitchen/delete')
var getKitchenRouter = require('./routes/kitchen/get')
var listKitchenRouter = require('./routes/kitchen/list')

//User routes

var usersRouter = require('./routes/users/users');
var listRouter = require('./routes/users/list');
var putRouter = require('./routes/users/put')
var deleteRouter = require('./routes/users/delete')

//Iphone routes

var phonesRouter = require('./routes/iphone/phones')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', listRouter);
app.use('/', putRouter);
app.use('/', deleteRouter);


//kitchen app

app.use('/', postKitchenRouter)
app.use('/', downloadKitchenRouter)
app.use('/', deleteKitchenRouter)
app.use('/', getKitchenRouter)
app.use('/', listKitchenRouter)

//iphone app

app.use('/',phonesRouter)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
