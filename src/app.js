require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
const methodOverride = require('method-override'); //requiero el metodo que me permite usar PUT y DELETE
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session') // requiero express-session


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const checkLocals = require('./middlewares/checkLocals'); //requiero el middleware (De Aplicacion)
const checkCookie = require('./middlewares/checkCookie');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,  'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(methodOverride('_method')) // Asi pisamos el metodo "Post" en el Formulario
app.use(session({   // configuro session, de acuerdo al rol que el usuario tenga, se le dara acceso o no a deteminadas acciones
  secret : "BookIsLife for ever",
  resave: false,
  saveUninitialized: true,
  cookie :{}
}))
app.use(checkCookie);
app.use(checkLocals); //uso el middleware que me levanta session.

/*   RUTAS   */


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/edit', productsRouter);
app.use('/create', productsRouter);
app.use('/questions',indexRouter);


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