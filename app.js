var WebSocket = require('ws');
var parser = require('./predix/parser');
var publisher = require('./predix/publisher');

// console.log('Client publishing.. ');
//
// var ws = new WebSocket('ws://192.168.42.1:8887/', {
//   protocolVersion: 8,
//   origin: 'http://192.168.42.1'
// });
//
// const wss = new WebSocket.Server({ port: process.env.VCAP_APP_PORT || 5000});
// //console.log('Listening on port : ' + (process.env.VCAP_APP_PORT || 5000));
//
// wss.on('connection', function connection(ws) {
//   ws.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });
//   ws.send('nothing to see here');
// });
//
// ws.on('open', function open() {
//   console.log('connected');
//   ws.send(Date.now().toString(), {mask: true});
// });
//
// ws.on('close', function close() {
//   console.log('disconnected');
// });
//
// ws.on('message', function message(data, flags) {
//   //console.log('Data: ' + data);
//   publisher.publish(parser.parseStream(data),"test");
// //  setTimeout(function timeout() {
// //    ws.send(Date.now().toString(), {mask: true});
// //  }, 500);
// });
console.log("---- started ----");

setInterval(function() {
  var subtopic = "test";
  publisher.publish(parser.parseStream("test"),subtopic);
}, 3000);
