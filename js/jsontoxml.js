const jsontoxmlFunc = input => {
  try {
    const jsonObject = JSON.parse(input);
    const varXML = JXON.jsToXml(jsonObject);
    return varXML;
  } catch (e) {
    return e;
  }
};

const xmltojsonFunc = input => {
  try {
    return JXON.stringToJs(input);
  } catch (e) {
    return e;
  }
};

const addElementFunc = params => {
  var name = params.name;
  var attributes = params.attributes;
  var jsonNode = params.jsonNode ? params.jsonNode : {};

  if (typeof jsonNode[name] !== 'undefined') {
    var currentData = jsonNode[name];
    var dataCopied = JSON.parse(JSON.stringify(currentData));
    currentData = new Array();

    if (Array.isArray(dataCopied)) {
      for (var i in dataCopied) {
        currentData.push(dataCopied[i]);
      }
      currentData.push(attributes);
    } else {
      currentData.push(dataCopied);
      currentData.push(attributes);
    }
    jsonNode[name] = currentData;
  } else {
    jsonNode[name] = attributes;
  }
  return jsonNode;
};

convert = {
  jsontoxml: jsontoxmlFunc,
  xmltojson: xmltojsonFunc,
  addElement: addElementFunc
};
