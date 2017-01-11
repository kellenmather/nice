var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render("index");
})

app.post('/results', function(req, res) {
	console.log("POST DATA", req.body);
	console.log(req.body)
	res.render('results.ejs', {data:req.body});
})

app.listen(8000, function() {
 console.log("tuning into port 8000");
});