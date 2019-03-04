const xmltojson = () => {
  document.getElementById('json').value = JSON.stringify(
    convert.xmltojson(document.getElementById('xml').value)
  );
};

const jsontoxml = () => {
  document.getElementById('xml').value = JXON.xmlToString(
    convert.jsontoxml(document.getElementById('json').value)
  );
};

const cargarJson = () => {
  document.getElementById('json').value = JSON.stringify(jsonCertificado);
};
