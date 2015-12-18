var express = require ("express");
var router = express.Router(); 
var knex = require("../db/knex");

router.get('/', function(req, res){
	console.log("users / handler");

	knex('users').then(function(data){
	console.log(data);
	res.render ("index");	
	});
});

//GET /users/new
router.get('/new', function(req, res){
	console.log("users / new handler");
	res.render ("new");
});

router.post('/', function(req, res){
	console.log("users / post handler");

	var uName = req.query.q;
	knex('user').insert({name: uName});
	res.redirect('/users'); 
});

module.exports = router; 