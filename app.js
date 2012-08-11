var express = require('express');
var ArticleProvider = require('./data-provider').ArticleProvider;
var nodeio = require('node.io');

var app = module.exports = express.createServer();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

var articleProvider= new ArticleProvider();

app.get('/', function(req, res){
  articleProvider.display(function(error, docs){
      res.send(docs);
  });
});

//////////////////////////////////////////////////////////////

app.get('/pizza/:date', function(req, res) {
	var date = req.params.date.toString();
	articleProvider.displayPizza(date, function(error, docs){
      res.send(docs);
  });
});

app.get('/bakery/:date', function(req, res) {
	var date = req.params.date.toString();
	articleProvider.displayBakery(date, function(error, docs){
		res.send(docs);
	});
});

app.get('/music/:date', function(req, res) {
	var date = req.params.date.toString();
	articleProvider.displayMusic(date, function(error, docs){
		res.send(docs);
	});
});


/*

app.get('/bread')

app.get('/bread/today')

app.get('/bread/tomorrow')

app.get('/music')

app.get('/music/today')

app.get('/music/tomorrow') */

//////////////////////////////////////////////////////////////

app.listen(3000);