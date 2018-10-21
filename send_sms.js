// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC94c8ce4abe01e424ddb781e63dd8ed24';
const authToken = '5055e904607ab9cba167aab310bedb8a';
const client = require('twilio')(accountSid, authToken);
const toMobile = '+61468619908'
const fromMobile = '+61428170836'

function alert(to, from) {
    client.messages
	  .create({
	     body: 'A fire has been registered near your area. See here for more details: http://www.beac.on/sh923hgs',
	     from: from,
	     to: to
	   })
	  .then(message => console.log(message.sid))
	  .done();
}

function confirmation(to, from) {
	client.messages
	  .create({
	     body: 'A fire has been registered near your area. See here for more details: http://www.beac.on/sh923hgs',
	     from: from,
	     to: to
	   })
	  .then(message => console.log(message.sid))
	  .done();
}

function warning(to, from) {
	client.messages
	  .create({
	     body: 'There is a fire VERY CLOSE to your postcode. Please consider evacuating! http://www.beac.on/sh923hgs',
	     from: from,
	     to: to
	   })
	  .then(message => console.log(message.sid))
	  .done();
}

alert(toMobile, fromMobile)
confirmation(toMobile, fromMobile)
warning(toMobile, fromMobile)