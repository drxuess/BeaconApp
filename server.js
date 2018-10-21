const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  var body = req.body.Body
  var postcode = body.match(/[0-9]{4}/)[0]


  var returnMessage = 'Thanks for your input into the Beacon Fire Service! Cheers for your contribution regarding postcode: ' + postcode + '.'

  twiml.message(returnMessage);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});