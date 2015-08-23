var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get('/', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('pages/index');
});

app.get('/report', function(req, res) {
	
	var report = require('./routes/report');
	var result = report.report(req.query['landingpages'], req.query['keywords'], res);
});

app.get('/contact', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('pages/contact');
});

app.get('/emailsubmitted', function(req, res) {

	// ejs render automatically looks in the views folder
	res.render('pages/emailsubmitted');
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
