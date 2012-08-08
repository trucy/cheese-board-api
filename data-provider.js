breadPastryList = [];
start = 0;
num = 0;
breadIngredients = [];

	var nodeio = require('node.io'), options = {};
	var async = require('async');
	
	// create bread objects
	function bread(id,name,ingredients,schedule) {
		this.id=id;
		this.name=name;
		this.ingredients=ingredients;
		this.schedule=schedule;
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
														
					this.emit("breadPastry list without duplicates =" + breadPastryList.length); // 67
															
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
						
						var contentTest = getIngredients(pastry_number);

						self.emit(contentTest);
						
						function getIngredients(pastry_number) {
							
							//take div inner html because bread #13 (scone of the day) is empty
							var contentTest1 = $('div#bread_detail_1').innerHTML;
							var contentTest2 = $('div#bread_detail_2').innerHTML;
							var title = $('div#bread_detail h2').text;
							var day = $('div#bread_detail h2 span').text;
							
							
							// create arrays for days [Mon, Tues, Weds, Thurs, Fri, Sat]
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
							
							// remove div tags

		//					contentTest1 = contentTest1.replace(/\x3Cdiv\x20id\x3D\x22bread\x5Fdetail\x5F[12]?\x22\x3E/g,"");
							contentTest1 = contentTest1.replace(/\x3C\/div\x3E/g,"");
							
		
							contentTest2 = contentTest2.replace(/\x3C\/div\x3E/g,"");

							contentTest1 = contentTest1.concat(contentTest2,"<br />");
			
							contentTest1 = contentTest1.replace(/\x3Cdiv\x20id\x3D\x22bread\x5Fdetail\x5F[12]?\x22\x3E/g,"");
							
							contentTest1 = contentTest1.replace(/\x26nbsp\x3B/g,""); // replace spaces
							contentTest1 = contentTest1.replace(/\x26rsquo\x3B/g,"'"); // replace apostrophes
							
							contentTest1 = contentTest1.replace(/\x3C[\/]?p\x3E(\x3Cp\x3E)?/g, "<br />"); // find all <p>, </p> and </p><p> and replace with <br />
							contentTest1 = contentTest1.replace(/(\x3Cbr \/\x3E)+/g, "<br />"); // find multiple instances of <br /> and replace with one

							var ingredientsArray = contentTest1.split("<br />"); // ingredients works!

							// remove "" at beginning and end of array
							ingredientsArray.shift();
							ingredientsArray.pop();

							if(contentTest2 == "") { ingredientsArray = "ingredients vary"; }
							
							var breadObject = "bread" + pastry_number.toString();
							
						 	breadObject= new bread(pastry_number,title,ingredientsArray,day);
						
							contentTest1 = breadObject;
								
							return contentTest1;
							
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
						this.emit("no music this week"); 
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

						this.emit(musicDate); // days x5
						this.emit(musicMeal); // lunch/dinner x10
						this.emit(musicArtist); // artist x10

					}
					
					var pizzaDate = [];
					$('h4').each(function(title) {
						pizzaDate.push(title.text);
					});
					
					var pizza = [];
					$('p').each(function(title) {
						pizza.push(title.text);
					});
					
					this.emit("pizzaDate = " + pizzaDate); // only take first 5 entries
					this.emit("pizza" + pizza); // only take first 5 entries

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
	  		console.log(results);
		});

ArticleProvider = function(){};

ArticleProvider.prototype.display = function(callback) {
  callback( null, menuJSON )
};

exports.ArticleProvider = ArticleProvider;