const jsontoxmlFunc = input => {
  try {
    jsonObject = JSON.parse(input);
    varXML = JXON.jsToXml(jsonObject);
    console.log(varXML);
    return varXML;
  } catch (e) {
    return e;
  }
};

const xmltojsonFunc = input => {
  try {
    varJSON = JXON.stringToJs(input);
    console.log(varJSON);
    return varJSON;
  } catch (e) {
    return e;
  }
};

convert = {
  jsontoxml: jsontoxmlFunc,
  xmltojson: xmltojsonFunc
};
