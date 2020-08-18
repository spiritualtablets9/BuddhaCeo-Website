var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser");

var homeRoutes = require("./routes/home");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.use(homeRoutes);

app.listen(3000, function() { 
  console.log('BudhaCeo app has started on port 3000'); 
});