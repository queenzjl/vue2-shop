var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var goodsRouter = require('./routes/goods');
var usersRouter = require('./routes/users');
var ejs = require('ejs')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev')); //日志中间件
app.use(bodyParser.json()); //解析json数据
app.use(bodyParser.urlencoded({ extended: false })); //url的编码方式
app.use(cookieParser()); //请求cookie
app.use(express.static(path.join(__dirname, 'public'))); //公共资源路径


/* //cors跨域服务端配置
app.all('*', (req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');

    next();
}); */

// 登录拦截
app.use(function(req, res, next) {
    if (req.cookies.userId) {
        next();
    } else {
        console.log("url:" + req.originalUrl);
        if (req.originalUrl == '/users/login' || req.originalUrl == '/users/logout' || req.originalUrl.indexOf('/goods/list') > -1) {
            next();
        } else {
            res.json({
                status: '10001',
                msg: '当前未登录',
                result: ''
            });
        }

    }
});

app.use('/', indexRouter);
app.use('/goods', goodsRouter);
app.use('/users', usersRouter);



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