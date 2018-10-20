const loki = require("lokijs")

module.exports = {
    setupDB: function () {
        console.log("Creating DB")
        var db = new loki("database.json")
        var users = db.addCollection('users')
        var fires = db.addCollection('fires')
        db.save()
    }
}