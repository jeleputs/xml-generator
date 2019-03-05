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

var json = {};

const addElementFunc = params => {
  var name = params.name;
  var content = params.content;
  var jsonNode = params.jsonNode || json;

  jsonNode[name] = content;
  return jsonNode;
};

convert = {
  jsontoxml: jsontoxmlFunc,
  xmltojson: xmltojsonFunc,
  addElement: addElementFunc
};
