const xmltojson = () => {
  document.getElementById('json').value = convert.xmltojson(
    document.getElementById('xml').value
  );
};

const jsontoxml = () => {
  document.getElementById('xml').value = convert.jsontoxml(
    document.getElementById('json').value
  );
};
