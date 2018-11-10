var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");


router.get('/', function(req, res) {
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index',{burger_data});

  })
})

router.post ('/burgers/update',function(req,res){
  console.log('i am here')
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

router.put('/burgers/:id', function(req, res) {
  console.log(req.params.id + " HELLO")
});

module.exports = router;
  