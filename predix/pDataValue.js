'use strict';

// {
//     "timestamp":1440608242631,
//     "category":"REAL",
//     "address":"com.ge.dspmicro.machineadapter.modbus://127.0.0.1:502/2/20",
//     "name":"Node-2-1",
//     "quality":"NOT_SUPPORTED (20000000) ",
//     "value":211,
//     "datatype":"INTEGER"
// }

let pDataValue = {};

pDataValue.toPDataValue = (tagname,timestamp,value,quality,datatype) => {
  var pDataValueObject = createIntegerPDataValueObject(pDataValueObject);

  pDataValueObject.name = tagname;
  pDataValueObject.timestamp = timestamp;
  pDataValueObject.value = value;
  pDataValueObject.quality = qualityHelper(quality);
  pDataValueObject.datatype = datatype;

  return pDataValueObject;
};

var qualityHelper = (quality) => {
  var qualityStr = "NOT_SUPPORTED (20000000) ";

  return qualityStr;
};

var createIntegerPDataValueObject = (pDataValueObject) => {
  var object = {
      "category":"REAL",
  };

  return object;
};

module.exports = pDataValue;
