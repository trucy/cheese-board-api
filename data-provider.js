test = [];
breadPastryList = [];
start = 0;
num = 0;
breadIngredients = [];
bakery = [];


bakeryObj = {
	"count": 67,
	"items": [
		{
			"id":"8",
			"name":"Bialy",
			"ingredients": {
				"count": 7,
				"items":[
					"Organic white flour",
					"Water",
					"Sourdough starter",
					"Onions",
					"Poppy seeds",
					"Garlic olive oil",
					"Sea salt"
					]
				},
			"schedule":[
				1,
				1,
				1,
				1,
				1,
				1
			]
		},
		{
			"id":"2",
			"name":"Bran Muffins",
			"ingredients":{
				"count": 13,
				"items":[
					"Organic whole wheat flour",
					"Eggs",
					"Buttermilk",
					"Organic wheat bran",
					"Wheat germ",
					"Rice bran oil",
					"Molasses",
					"Brown sugar",
					"Currants",
					"Walnuts",
					"Water",
					"Baking soda",
					"Sea salt"
					]
				},
			"schedule":[
				1,
				1,
				1,
				1,
				1,
				1
			]
		},
		{
			"id":"16",
			"name":"Brioche",
			"ingredients": {
				"count": 11,
				"items": [
					"Organic white flour",
					"Sugar",
					"Butter",
					"Eggs",
					"Buttermilk",
					"Cream",
					"Water",
					"Golden raisins",
					"Cinnamon",
					"Yeast",
					"Sea salt"
					]
				},
			"schedule":[
				1,
				1,
				1,
				1,
				1,
				1
			]
		},
		{
			"id":"20",
			"name":"Chocolate things",
			"ingredients":{
				"count": 10,
				"items": [
					"Organic white flour",
					"Sugar",
					"Butter",
					"Eggs",
					"Buttermilk",
					"Cream",
					"Water",
					"Chocolate",
					"Yeast",
					"Sea salt"
					]
				},
			"schedule":[
				1,
				1,
				1,
				1,
				1,
				1
			]
		},
		{
			"id":"36",
			"name":"Chocolate cake",
			"ingredients":{
				"count": 12,
				"items": [
					"Organic white flour",
					"Sugar",
					"Butter",
					"Cocoa",
					"Chocolate chips",
					"Sour cream",
					"Eggs",
					"Organic coffee",
					"Cream",
					"Sea salt",
					"Baking soda",
					"Baking powder"
				]
			},
			"schedule":[
				0,
				1,
				0,
				1,
				1,
				0
			]
		},
		{
			"id":"62",
			"name":"Apple Apricot Muffin",
			"ingredients":{
				"count": 16,
				"items":[
					"Organic white flour",
					"Orange Juice",
					"Brown sugar",
					"Rice bran oil",
					"Sugar",
					"flax meal",
					"Dried apples",
					"Pecans",
					"Organic rolled oats",
					"Wheat germ",
					"Dried apricots",
					"Baking soda",
					"Cinnamon",
					"Vanilla",
					"Sea salt",
					"Water"
				]
			},
			"schedule":[
				0,
				0,
				0,
				1,
				1,
				1
			]
		},
		{
			"id":"59",
			"name":"Pumpernickel Bread",
			"ingredients":{
				"count": 9,
				"items": [
					"Organic white flour",
					"Water",
					"Starter",
					"Organic rye flour",
					"Organic semolina",
					"Organic cracked rye",
					"Organic cornmeal",
					"Caramel coloring",
					"Sea salt"
				]
			},
			"schedule":[
				0,
				0,
				0,
				0,
				0,
				1
			]
		},
		{
			"id":"65",
			"name":"Sunday Bread",
			"ingredients":{
				"count": 11,
				"items": [
					"Organic white flour",
					"Water",
					"Raisins",
					"Almonds",
					"Walnuts",
					"Eggs",
					"Buttermilk",
					"Butter",
					"Cinnamon",
					"Sea salt"
					]
				},
			"schedule":[
				0,
				0,
				0,
				0,
				0,
				1
			]
		}
	]
} // end bakery object

musicObj = {
	"count": 5,
	"items":[
	{
		"date": "Tuesday 7/31",
		"artist": {
			"lunch" : "Gaucho",
			"dinner" : "Freddy Hughes"
		}
	},
	{
		"date": "Wednesday 8/1",
		"artist": {
			"lunch": "Primavera",
			"dinner": "Elena Pinderhughes"
		}
	},
	{
		"date": "Thursday 8/2",
		"artist": {
			"lunch": "Amber Gougis",
			"dinner": "Claudia Russell"
		}
	},
	{
		"date": "Friday 8/3",
		"artist": {
			"lunch": "Nancy Wright",
			"dinner": "Kicking the Mule"
		}
	},
	{
		"date": "Saturday 8/4",
		"artist": {
			"lunch": "Freddy Hughes",
			"dinner": "Malik Shabazz (Little Wolf)"
		}
	}	
	]
}; // end music object

musicClosed = {
	"count": 2,
	"items":[
	{
		"date": "",
		"artist": {
			"lunch": "The Cheese Board is closed today",
			"dinner": "The Cheese Board is closed today"
		}
	},
	{
		"date": "",
		"artist": {
			"lunch": "The Cheese Board is closed tomorrow",
			"dinner": "The Cheese Board is closed tomorrow"
		}
	}
	]
};

pizzaClosed = {
	"count": 2,
	"items":[
	{
		"date": "",
		"ingredients": {
			"count": 0, 
			"items":[
				"The Cheese Board Pizza is closed today"
				]
			}
	},
	{
		"date": "",
		"ingredients": {
			"count": 0, 
			"items":[
				"The Cheese Board Pizza is closed tomorrow"
				]
			}
	}
	]
}; // end pizzaClosed

bakeryClosed = {
	"count": 2,
	"items":[
	{
		"date": "",
		"ingredients": {
			"count": 0, 
			"items":[
				"The Cheese Board Bakery is closed today"
				]
			}
	},
	{
		"date": "",
		"ingredients": {
			"count": 0, 
			"items":[
				"The Cheese Board Bakery is closed tomorrow"
				]
			}
	}
	]
}; // end bakeryClosed


pizzaObj = {
	"count": 5,
	"items": [
	{
		"date": "Tuesday 7/31",
		"ingredients": {
			"count": 7,
			"items":[
			"Fresh corn",
			"Chile Pasilla",
			"Onions",
			"Mozzarella and French feta cheese",
			"Garlic olive oil",
			"Key limes",
			"Cilantro"
			]
		}
	},
	{
		"date": "Wednesday 8/1",
		"ingredients": {
			"count": 5,
			"items":[
				"Crimini mushrooms",
				"Onions",
				"Mozzarella and French Goat cheese",
				"Fresh herbs",
				"Garlic olive oil"
			]
		}
	},
	{
		"date": "Thursday 8/2",
		"ingredients": {
			"count": 6,
			"items":[
				"Heirloom tomato",
				"Red onions",
				"Aged asiago Cheese",
				"Mozzarella",
				"Fresh herbs",
				"Garlic olive oil"
				]
		}
	},
	{
		"date": "Friday 8/3",
		"ingredients": {
			"count": 5,
			"items":[
				"Summer squash",
				"Red onions",
				"French Feta cheese",
				"Mozzarella",
				"Arugula with Hazelnut Pesto"
				]
			}
	},
	{
		"date": "Saturday 8/4",
		"ingredients": {
			"count": 6, 
			"items":[
				"Fresh corn",
				"Red bell peppers",
				"French Feta cheese",
				"Mozzarella",
				"Cilantro",
				"Garlic olive oil"
				]
			}
	}
	]
}; // end pizzaObj

	var nodeio = require('node.io'), options = {};
	var async = require('async');
	
	// create bread objects
	function bread(id,name,ingredients,schedule) {
		this.id = id;
		this.name = name;
		this.ingredients = ingredients;
		this.schedule = schedule;
	}
	
	// create api object
	function api(pizza,music,bakery) {
		this.pizza = pizza;
		this.music = music;
		this.bakery = bakery;
	}
	
	function pizza(ingredients, schedule) {
		this.ingredients = ingredients;
		this.schedule = schedule;
	}

	breadURLs = new nodeio.Job(options, {
		input: function(start, num, callback) {
			if(start !== 0) return false; // We only want the input method to run once
			var self = this;

			this.getHtml('http://cheeseboardcollective.coop/cheese_bakery/bakery_schedule', function(err, $) {

				$('p a').each('href', function(title) {
					breadPastryList.push('http://cheeseboardcollective.coop' + title);
				});

				breadPastryList = breadPastryList.filter(function(o,i,a){ return a.indexOf(o) === i;});

//				this.emit("breadPastry list without duplicates =" + breadPastryList.length); // 67

				var numPastries = 0;

				for (var i=0; i < breadPastryList.length; i++) {
					breadPastryList[i] = breadPastryList[i].replace(/http:\/\/cheeseboardcollective.coop\/cheese_bakery\/bread\//, "");
					numPastries = breadPastryList[i];
					callback([numPastries]);					
				}

				callback(null, false);
			});

		},
		run: function (pastry_number) {
			var self = this;
			this.getHtml('http://cheeseboardcollective.coop/cheese_bakery/bread/' + pastry_number, function(err, $) {
				if (err) {
					console.log("ERROR", err);
					self.retry();
				}
				else {

					bakery = getIngredients(pastry_number);

					function getIngredients(pastry_number) {

						//take div inner html because bread #13 (scone of the day) is empty and will otherwise throw an error
						var contentTest1 = $('div#bread_detail_1').innerHTML;
						var contentTest2 = $('div#bread_detail_2').innerHTML;
						var title = $('div#bread_detail h2').text;
						var day = $('div#bread_detail h2 span').text;				

						// array for baking schedule [Mon, Tues, Weds, Thurs, Fri, Sat]
						switch(day){
							case "Every day":
								day = [1,1,1,1,1,1];
								break;
							case "Every day except Mondays":
								day = [0,1,1,1,1,1];
								break;
							case "Monday, Tuesday, Wednesday":
								day = [1,1,1,0,0,0];
								break;
							case "Monday":
								day = [1,0,0,0,0,0];
								break;
							case "Tuesday":
								day = [0,1,0,0,0,0];
								break;
							case "Tuesday, Thursday":
								day = [0,1,0,1,0,0];
								break;
							case "Tuesday, Saturday":
								day = [0,1,0,0,0,1];
								break;
							case "Tuesday, Thursday, Friday":
								day = [0,1,0,1,1,0];
								break;
							case "Tuesday, Wednesday, Saturday":
								day = [0,1,1,0,0,1];
								break;
							case "Tuesday, Wednesday, Thursday, Friday":
								day = [0,1,1,1,1,0];
								break;
							case "Wednesday":
								day = [0,0,1,0,0,0];
								break;
							case "Wednesday, Saturday":
								day = [0,0,1,0,0,1];
								break;
							case "Thursday":
								day = [0,0,0,1,0,0];
								break;
							case "Thursday, Friday, Saturday":
								day = [0,0,0,1,1,1];
								break;
							case "Friday":
								day = [0,0,0,0,1,0];
								break;
							case "Saturday":
								day = [0,0,0,0,0,1];
								break;
							default:
								day = [0,0,0,0,0,0];
								break;
						}

						// remove end </div> tags
						contentTest1 = contentTest1.replace(/\x3C\/div\x3E/g,"");
						contentTest2 = contentTest2.replace(/\x3C\/div\x3E/g,"");

						// concatenate ingredients in div1 and div2
						contentTest1 = contentTest1.concat(contentTest2,"<br />");

						// remove leading div tags with ids
						contentTest1 = contentTest1.replace(/\x3Cdiv\x20id\x3D\x22bread\x5Fdetail\x5F[12]?\x22\x3E/g,"");

						// replace spaces and apostrophes
						contentTest1 = contentTest1.replace(/\x26nbsp\x3B/g,"");
						contentTest1 = contentTest1.replace(/\x26rsquo\x3B/g,"'");

						contentTest1 = contentTest1.replace(/\x3C[\/]?p\x3E(\x3Cp\x3E)?/g, "<br />"); // find all "<p>", "</p>" and "</p><p>" and replace with "<br />"
						contentTest1 = contentTest1.replace(/(\x3Cbr \/\x3E)+/g, "<br />"); // find multiple instances of <br /> and replace with one

						var ingredientsArray = contentTest1.split("<br />");

						// remove "" at beginning and end of ingredients array
						ingredientsArray.shift();
						ingredientsArray.pop();

						// for the scone of the day, content is empty
						if(contentTest2 == "") { ingredientsArray = "ingredients vary"; }

							var breadObject = "bread" + pastry_number.toString();
						 	breadObject= new bread(pastry_number,title,ingredientsArray,day);
							test.push(breadObject);
							return test;
	
						}		
					}
				});
			}
		});

		musicians = new nodeio.Job(options, {
			input: false,
			run: function() {
				this.getHtml('http://cheeseboardcollective.coop/pizza', function(err, $) {

					var music = $('.blue').text;

					if (music == "") {
//						this.emit("no music this week"); 
					}
					else {
						var musicDate = [];
						$('.blue h4').each(function(title) {
							musicDate.push(title.text);
						});

						var musicMeal = []; // one artist for lunch and dinner for each date
						$('.blue h5').each(function(title) {
							musicMeal.push(title.text);
						});

						var musicArtist = [];
						$('.blue li').each(function(title) {
							musicArtist.push(title.text);
						});

//						this.emit(musicDate); // days x5
//						this.emit(musicMeal); // lunch/dinner x10
//						this.emit(musicArtist); // artist x10

					}
					
					var pizzaDate = [];
					$('h4').each(function(title) {
						pizzaDate.push(title.text);
					});
					
					var pizza = [];
					$('p').each(function(title) {
						pizza.push(title.text);
					});
					
//					this.emit("pizzaDate = " + pizzaDate); // only take first 5 entries
//					this.emit("pizza" + pizza); // only take first 5 entries

				});

			}
		}
		);

		// an example using an object instead of an array
		async.series({
		    musicians: function(callback) {
					nodeio.start(musicians,options, function(){
						console.log("musicians finished?");
					});
					callback(null, 1);		
				},
		    bakery: function(callback){
					nodeio.start(breadURLs);
	        callback(null, 2);
		    },
		},
		function(err, results) {
		    // results is now equal to: {one: 1, two: 2}
//	  		console.log(results);
		});

ArticleProvider = function(){};

getDate = function(){
	var currentTime = new Date();
	var day = currentTime.getDay(); // 0 - 6
	var month = currentTime.getMonth() + 1; // month (0-11)
	var date = currentTime.getDate(); // date (1-31)
	var dateArray = [day, month, date];
	
	return dateArray;
}

ArticleProvider.prototype.display = function(callback) {
 	var apiObject = new api(pizzaObj, musicObj, bakeryObj);
  callback( null, apiObject )
};

ArticleProvider.prototype.displayMusic = function(dateQuery, callback){
	var date = getDate();
	day = date[0] - 2; // music is 5 days/wk
	
	switch(dateQuery){
		case "today":
			if( day >= 0 ) {
				callback( null, musicObj.items[day])
			}
			else {
				callback( null, musicClosed.items[0])
			}		
			break;
		case "tomorrow":
			if( day < 4 ) {
				callback( null, musicObj.items[day + 1])
			}
			else {
				callback( null, musicClosed.items[1])
			}
			break;
		case "week":
			callback( null, musicObj )
			break;
		default:
			break;
	}
	
};

ArticleProvider.prototype.displayBakery = function(dateQuery, callback){
	var date = getDate();
	day = date[0] - 1; // bakery schedule is 6 days/wk
			
	switch(dateQuery){
		case "today":
			if( day >= 0 ) {
				var e = bakeryObj.items.filter(function(el){ return el.schedule[day] == 1; } );
				callback( null, e)
			}
			else {
				callback( null, bakeryClosed.items[0])
			}
			break;
		case "tomorrow":
		if( day < 5 ) {
			var f = bakeryObj.items.filter(function(el){ return el.schedule[day + 1] == 1; } );
			callback( null, f)
		}
		else {
			callback( null, bakeryClosed.items[1])
		}
			break;
		case "week":
			callback (null, bakeryObj )
			break;
		case "today-only" :
			var g = bakeryObj.items.filter(function(el){ 
				var scheduleTotal = el.schedule.reduce(function(a, b) {
				    return a + b;
				});
					return scheduleTotal == 1;
			} );
			callback (null, g)
			break;
		default:
			var filterDate = new RegExp(/^\d{8}$/);
			if (filterDate.test(dateQuery) == true ) {
			}
			else {
				callback( null, "invalid date format")
			}
			break;
	}

};

ArticleProvider.prototype.displayPizza = function(dateQuery, callback){	

	var date = getDate();
	day = date[0] - 2; // pizza schedule is 5 days/week

		switch(dateQuery){
			case "today":
				if( day >= 0 ) {
					callback( null, pizzaObj.items[day])
				}
				else {
					callback( null, pizzaClosed.items[0])
				}
				break;
			case "tomorrow":
				if (day < 4) {
					callback( null, pizzaObj.items[day + 1])					
				}
				else {
					callback( null, pizzaClosed.items[1])
				}
				break;
			case "week":
				 callback( null, pizzaObj )
				break;
			default:
				var filterDate = new RegExp(/^\d{8}$/);
				if (filterDate.test(dateQuery) == true ) {
					// parse the date and figure out if it exists in the current week
					// YYYYMMDD
					
					dateQuery.slice(4,6); // grab DD
					dateQuery.slice(6,8); // grab MM
					
					callback( null, pizzaObj)	
				}
				else {
					callback( null, "invalid date format")
				}
				
			break;
		}
		
};

exports.ArticleProvider = ArticleProvider;