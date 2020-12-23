var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser");

var routes        = require("./routes/routes"),


//                 API WITH MONGODB BELOW
api      = require("./routes/api");
// var mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://cluster0.cmgg5.mongodb.net/ceo?retryWrites=true&w=majority', { useNewUrlParser: true });
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://cluster0.cmgg5.mongodb.net/ceo?retryWrites=true&w=majority')
    .then(() => console.log('Connect to MongoDB..'))
    .catch(err => console.error('Could not connect to MongoDB..', err))
var db = mongoose.connection;

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.use(routes);
app.use(api);

app.listen(3000, function() {
  console.log('BudhaCeo app has started on port 3000');
});
