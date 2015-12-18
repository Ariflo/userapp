var express = require('express');
var app = express(); 
var bodyParser = require ("body-parser");
var userRoutes = require ("./controllers/users");

//middleware! 

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); 
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users', userRoutes);


app.listen(3000, function(){
	console.log('server is started on port 3000');
});