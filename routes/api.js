var express       = require("express");
var router        = express.Router();




/*                                            Mongoose Schema                            */
var Corporate = require("../models/Corporate");
var Programs = require("../models/Programs");
var Volunteer = require("../models/Volunteer");


function model(type) {
  if (type == 'corporate') {
    return Corporate;
  } else if (type == 'programs') {
    return Programs;
  } else if (type == 'volunteer') {
    return Volunteer;
  }
}

router.get('/api/:type', function (req, res) {
  model(req.params.type).find({}, (err, found) => {
    if (err) {
      console.log(err)
    } else {
      res.send(JSON.stringify(found, null, 4));
    }
  })
})

router.get('/api/delete/:type/:id', function (req, res) {
  model(req.params.type).findByIdAndDelete(req.params.id, (err, deleted) => {
    if (err) {
      console.log(err);
    } else {
      res.send("deleted");
    }
  })
})

router.post('/api/corporate', function (req, res) {
  var corp = req.body;

  for (var keys in corp) { //Checking for missing fields
    var incomplete = [];
    if (corp[keys] == undefined || corp[keys] == '') {
      incomplete.push(keys);
    }
  }

  if(!incomplete){
    Corporate.create(corp, (err, created) => {
      if (err) {
        console.log(err);
      } else {
        res.send('success');
      }
  } else {
    res.send('Error: '+ incomplete.join(', ') +' are missing!')
  }

})


router.post('/api/programs', function (req, res) {
  var pro = req.body;

  for (var keys in pro) { //Checking for missing fields
    var incomplete = [];
    if (pro[keys] == undefined || pro[keys] == '') {
      incomplete.push(keys);
    }
  }

  if(!incomplete){
    Programs.create(pro, (err, created) => {
      if (err) {
        console.log(err);
      } else {
        res.send('success');
      }
  } else {
    res.send('Error: '+ incomplete.join(', ') +' are missing!')
  }

})


router.post('/api/volunteers', function (req, res) {
  var vol = req.body;

  for (var keys in vol) { //Checking for missing fields
    var incomplete = [];
    if (vol[keys] == undefined || vol[keys] == '') {
      incomplete.push(keys);
    }
  }

  if(!incomplete){
    Volunteer.create(vol, (err, created) => {
      if (err) {
        console.log(err);
      } else {
        res.send('success');
      }
  } else {
    res.send('Error: '+ incomplete.join(', ') +' are missing!')
  }

})








module.exports = router;
