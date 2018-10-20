const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const setup = require('./setup')
const loki = require("lokijs")

// HANDLING DATA
function handleFile() {
    obj = JSON.parse(fireData)
    // console.log(obj)
}

if (!fs.existsSync('database.json')) {
    setup.setupDB()
}

var wait = ms => new Promise((r, j)=>setTimeout(r, ms))
var obj;
var fireData;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

wait(1000)

fs.readFile('data/FIRMS/c6/Australia_NewZealand/newest.json', function (err, data) {
	if (err) throw err;
	fireData = data;
	handleFile()
	addFireData()
	
});

function addFireData() {
	if (fs.existsSync('database.json')) {
		db = new loki('database.json')
		db.loadDatabase({}, function () {
			var fires = db.getCollection("fires");
			fires.insert(obj)
			// console.log(fires.get(1))
			db.save()
		});
	}	
}



