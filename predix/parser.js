'use strict';
var pDataValue = require('./pDataValue');

let parser = {};

//BLAYNE THIS IS THE CODE YOU HAD IN APP.JS
parser.parseStream = (data) => {
  if(data === "test") {
    return parseHelper(null);
  } else {
    var js = JSON.parse(data);

    //if the data is sensor data, then parse through it!
    if (js.type.toLowerCase() === "sensor-data")
    {
      //if content, parse it out!
      if(data.contents !== null || data.contents !== undefined) {
        return parseHelper(data.contents);
      }
    }
    else
    {
      console.log(data);
    }
  }
};

//returns an array of pDataValueObject
var parseHelper = (contents) => {
    //TODO: parse out datapoints we care about
    // parse out content you want!
    // if ((contents.name.toLowerCase() === "thing2") && (contents.type.toLowerCase() === "temperature"))
    // {
    //   console.log('Thing 2 - Temperature : ' + js.contents.value)
    //   var topic = baseTopic + '/test';
    //   mqttClient.publish(topic, js.contents.value)
    // }
    // else
    // {
    //   console.log(js.contents);
    // }

    //TODO: cycle through datapoints and convert them into PDataValues as done below
    var pDataValueArray = [];


    //Test data
    var tagname = "test1";
    var timestamp = (new Date).getTime();
    var value = Math.round(Math.random() * 10);
    var quality = 2;
    var datatype = "FLOAT";

    pDataValueArray.push(pDataValue.toPDataValue(tagname,timestamp,value,quality,datatype));

    return pDataValueArray;
};

var timestampHelper = (time) => {
  var timestamp = null;

  return timestamp;
};

module.exports = parser;
