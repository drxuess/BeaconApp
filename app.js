const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const loki = require("lokijs")

const db = new loki("database.json")

//SETUP
if (!fs.existsSync('database.json')) {
    var users = db.addCollection('users')
    var fires = db.addCollection('fires')
    var postcodes = db.addCollection('postcodes')
    db.loadDatabase({}, function(){
        var data = JSON.parse(fs.readFileSync('data/postcodes.json'))
        postcodes.insert(data)
        var data = JSON.parse(fs.readFileSync('data/FIRMS/c6/Australia_NewZealand/newest.json'))
        fires.insert(data)
        db.save()
        startServer()
    })
} else {
    db.loadDatabase({}, function(){
        startServer()
    })
}

function startServer() {
    app.use('/img', express.static(__dirname + '/web/img'));
    app.use('/css', express.static(__dirname + '/web/css'));
    app.use('/js', express.static(__dirname + '/web/js'));

    app.get('/', (req, res) => res.sendFile(__dirname + "/web/home.html"))
    app.get('/fireinfo', function (req, res) {
        var postcode = req.query.postcode
        var postcodes = db.getCollection("postcodes")
        var location = postcodes.findOne({postcode: postcode})
        res.send(postcode)
    })
    app.get('/signup', function (req, res) {
        res.sendFile(__dirname + "/web/signup.html")
    })
    app.get('/register', function (req, res) {
        var users = db.getCollection("users")
        var number = req.query.number
        var postcode = req.query.postcode
        try {
            users.insert({mobileNumber: number, postcode: postcode})
            db.save()
            res.send("Success")
        } catch (error) {
            res.send("Fail")
        }
        
    })
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}

function checkNearbyFire(postcode) {
    
}