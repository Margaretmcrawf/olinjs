var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var index = require('./routes/index');
var exphbs = require('express-handlebars');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', index.home);

app.get('/cats/new', index.newcat);

app.get('/cats', index.cats);

app.get('/cats/delete/old', index.old);

app.get('/cats/bycolor/:color', index.cats);

app.listen(3000);