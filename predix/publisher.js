'use strict';
var mqtt = require('mqtt');

let publisher = {};
let baseTopic = "data";

const mqttClient = mqtt.connect('tcp://localhost:1883');

mqttClient.on('connect', () => {
  // Inform controllers that garage is connected
  mqttClient.publish('messages/versa', 'MQTT Connected');
  console.log('MQTT Connected');
});

publisher.publish = (dataArray, subtopic) => {
  var topic = baseTopic + '/' + subtopic;
  console.log('------------- data  -----------------');
  console.log('topic: ' + topic);
  console.log(dataArray);

  // var dataO = [
  //   {
  //     category: 'REAL',
  //     datatype: 'INTEGER',
  //     name: 'test1',
  //     timestamp: 1485714999582,
  //     value: 5,
  //     quality: 'NOT_SUPPORTED (20000000) '
  //   }
  // ];

  mqttClient.publish(topic, JSON.stringify(dataArray));
  // mqttClient.publish(topic, "hello");

};


module.exports = publisher;
