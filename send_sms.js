// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
const accountSid = 'AC94c8ce4abe01e424ddb781e63dd8ed24';
const authToken = '5055e904607ab9cba167aab310bedb8a';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+61428170836',
     to: '+61468619908'
   })
  .then(message => console.log(message.sid))
  .done();