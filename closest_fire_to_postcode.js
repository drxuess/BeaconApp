const loki = require("lokijs")

var Distance = require('geo-distance');
var db = new loki("database.json")
var wait = ms => new Promise((r, j)=>setTimeout(r, ms))

function getClosestFireDist(postcode) {
	var min_dist = 100000000000;
	var closest_fire = null;

	var test = db.loadDatabase({}, function () {
		var postcodes = db.getCollection('postcodes')
		var fires = db.getCollection('fires')


		var primary = postcodes.find({'postcode': { '$eq' : postcode }});
		var search = fires.find({'latitude': { '$ne' : null }});


		for(var i=0; i < search.length; i++){

	  		var to = {
	  			lat: search[i].latitude,
	  			lon: search[i].longitude
	  		}

	  		var from = {
	  			lat: primary[0].lat,
	  			lon: primary[0].lon
	  		}
	  		
	  		var geomDist = Distance.between(to, from).human_readable().distance;

	  		if (min_dist > geomDist) {
	  			min_dist = Math.min(min_dist, geomDist)
	  			closest_fire = i
	  		}
	  	}
	  	console.log([min_dist, closest_fire])
	});
	// console.log(test)
	// return test

}

//console.log(getClosestFireDist(2000))
getClosestFireDist(2000)