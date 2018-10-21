const loki = require("lokijs")

// var distance = require('euclidean-distance')
var Distance = require('geo-distance');
var db = new loki("database.json")

function getClosestFireDist(postcode) {
	db.loadDatabase({}, function () {
		var postcodes = db.getCollection('postcodes')
		var fires = db.getCollection('fires')


		var primary = postcodes.find({'postcode': { '$eq' : postcode }});
		var search = fires.find({'latitude': { '$ne' : null }});
		var min_dist = 100000000000;


		// for(var i=0; i < search.length; i++){
			for(var i=0; i < search.length; i++){

	  		// distance([search[i].latitude, search[i].longitude], [primary[0].lat,primary[0].lon])
	  		var to = {
	  			lat: search[i].latitude,
	  			lon: search[i].longitude
	  		}

	  		var from = {
	  			lat: primary[0].lat,
	  			lon: primary[0].lon
	  		}

	  		
	  		var geomDist = Distance.between(to, from).human_readable().distance;
	  		min_dist = Math.min(min_dist, geomDist)


	  	}
	  	console.log(min_dist)

	});

}

getClosestFireDist(2000)