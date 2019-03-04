const jsontoxmlFunc = input => {
  var jsonval = false;
  var xmlval = false;
  try {
    jsonObject = JSON.parse(input);
    varXML = iterativeXML(jsonObject);
    return varXML;
  } catch {
    xmlval = false;
  }

  return xmlval;
};

const xmltojsonFunc = input => {
  return input;
};

const iterativeXML = jsonObject => {
  var xmlDoc = document.implementation.createDocument(null, 'books');
  var xmlString = '';
  for (var o in jsonObject) {
    if (typeof jsonObject[o] === 'object') {
      xmlString += iterativeXML(jsonObject[o]);
    } else {
      xmlString += o + ':' + JSON.stringify(jsonObject[o]) + '|';
    }
  }
  return xmlString;
};

convert = {
  jsontoxml: jsontoxmlFunc,
  xmltojson: xmltojsonFunc
};
