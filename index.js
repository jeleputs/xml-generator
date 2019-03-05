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

const addElement = () => {
  var wrapper;

  wrapper = convert.addElement({
    name: 'doc',
    content: 'id'
  });

  jsonChido = convert.addElement({
    name: '$prueba',
    content: 'bonita',
    wrapper
  });

  alumno = convert.addElement({
    name: 'Alumno',
    content: {
      $nombre: 'ricardo',
      $apellido: 'aguilera',
      $ap2: 'zamarripa',
      $rfc: 'auzr88'
    },
    jsonChido
  });

  firmante = convert.addElement({
    name: 'Firmante',
    content: {
      $lugar: 'saltillo',
      $certificado: '123123123',
      $firma: 'asfdasdfasf',
      $fecha: '2019-01-01'
    },
    jsonChido
  });

  //jsonChido['oiiiink'] = jsonChido2;
  document.getElementById('json').value = JSON.stringify(wrapper);
};
