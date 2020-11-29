var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  i18n_helper = require('./i18n_helper'),
  cookieParser = require('cookie-parser')
  var i18n = i18n_helper.i18n;

var defaultLocale = i18n_helper.defaultLang;

var routes = require("./routes/routes"),

  // API WITH MONGODB BELOW
  api = require("./routes/api");
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cluster0.cmgg5.mongodb.net/ceo?retryWrites=true&w=majority', { user: 'ceo', pass: 'jcb123' });
var db = mongoose.connection;

app.use(cookieParser());

// i18n init parses req for language headers, cookies, etc.
app.use(i18n.init);

app.locals.localesInfo = i18n_helper.localesInfo;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/*', function (req, res, next) {
  const cookie = req.cookies;
  if (Object.keys(cookie).length > 0) {
    if (cookie.hasOwnProperty(i18n.cookie_name)) {
      i18n.setLocale(res, req.cookies.i18n_lang);
    }
    else {
      res.cookie(i18n.cookie_name, defaultLocale)
      i18n.setLocale(res, defaultLocale);
    }
  } else {
    res.cookie(i18n.cookie_name, defaultLocale)
    i18n.setLocale(res, defaultLocale);
  }
  next();
})

app.use(routes);
app.use(api);

app.listen(3000, function () {
  console.log('BudhaCeo app has started on port 3000');
});
