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

convert = {
  jsontoxml: jsontoxmlFunc,
  xmltojson: xmltojsonFunc
};
