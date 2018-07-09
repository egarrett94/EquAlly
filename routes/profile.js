require('dotenv').config()
var mongoose = require('mongoose')
var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser')
var User = require('../models/user')

router.get('/', function(req, res, next) {
	console.log('yeet we in the profile route ');
	res.send('YEET')
});

router.post('/create', function(req, res, next) {
	console.log('You hit the create a journal route!', req.body.journalContent);
	var journal = {
	             "title": req.body.title,
	             "content": req.body.journalContent
	           }
	  User.findByIdAndUpdate(req.body.userId, {
	  	$push : {
	    		journals : journal  //inserted data is the object to be inserted 
	  		}
  		},
  		{safe: true, upsert: true},

	    function(err, doc) {
	        if(err){
	        	console.log(err);
	        }else{
	        	console.log('current user info', doc.journals[0][0].title);
	        }
	    }
	).then(function(doc) {
		res.redirect('/profile');
	});
});

module.exports = router;