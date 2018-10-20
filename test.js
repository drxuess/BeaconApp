const loki = require("lokijs")
const fs = require('fs')

var fireData;

fs.readFile('data/FIRMS/c6/Australia_NewZealand/newest.json', function (err, data) {
  if (err) throw err;
  fireData = data;
  handleFile()

});

function handleFile() {
    obj = JSON.parse(fireData)
    // You can now play with your datas
}
