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
    name: 'Dec',
    attributes: {
      $version: '1.0',
      $tipoCertificado: '5',
      $folioControl: '565',
      $sello: 'Sello base 64',
      $certificadoResponsable: 'Certificado base 64',
      $noCertificadoResponsable: '556563335448446'
    }
  });

  convert.addElement({
    name: 'Ipes',
    attributes: {
      $idNombreInstitucion: '34234',
      $nombreInstitucion: 'nombre',
      $idCampus: '5ss',
      $campus: 'Durango',
      $idEntidadFederativa: '05',
      $entidadFederativa: 'Coahuila'
    },
    jsonNode: wrapper.Dec
  });

  convert.addElement({
    name: 'Responsable',
    attributes: {
      $curp: 'AXXA009988999',
      $nombre: 'Ricardo',
      $primerApellido: 'Aguilera',
      $segundoApellido: 'Zamarripa',
      $idCargo: '05',
      $cargo: 'Director'
    },
    jsonNode: wrapper.Dec
  });

  convert.addElement({
    name: 'Rvoe',
    attributes: {
      $numero: '999',
      $fechaExpedicion: '2018-01-30T12:30:10.00221'
    },
    jsonNode: wrapper.Dec
  });

  convert.addElement({
    name: 'Carrera',
    attributes: {
      $idCarrera: 'XD34',
      $claveCarrera: 'RE44',
      $nombreCarrera: 'Ingeniería en alimentos',
      $idTipoPeriodo: '02',
      $tipoPeriodo: 'semestral',
      $clavePlan: '18'
    },
    jsonNode: wrapper.Dec
  });

  convert.addElement({
    name: 'Alumno',
    attributes: {
      $numeroControl: 'XD34',
      $curp: 'RE44',
      $nombre: 'Ingeniería en alimentos',
      $primerApellido: '02',
      $segundoApellido: 'semestral',
      $idGenero: '18',
      $fechaNacimiento: '2018-01-30T12:30:10.00221',
      $foto: 'zxcv2sd3gd81vb3cvx582h34f3g68hgf3xc',
      $firmaAutografa: 'zxcv2sd3gd81vb3cvx582h34f3g68hgf3xc'
    },
    jsonNode: wrapper.Dec
  });

  convert.addElement({
    name: 'Expedicion',
    attributes: {
      $idTipoCertificacion: '332',
      $tipoCertificacion: 'online',
      $fecha: '2018-01-30T12:30:10.00221',
      $idLugarExpedicion: '05',
      $lugarExpedicion: 'coahuila'
    },
    jsonNode: wrapper.Dec
  });

  convert.addElement({
    name: 'Asignaturas',
    attributes: {
      $total: '45',
      $asignadas: '45',
      $promedio: '8.71',
      $idLugarExpedicion: '05',
      $lugarExpedicion: 'coahuila'
    },
    jsonNode: wrapper.Dec
  });

  convert.addElement({
    name: 'Asignatura',
    attributes: {
      $idAsignatura: '001',
      $claveAsignatura: 'AXA',
      $nombre: 'Agricultura',
      $ciclo: '15',
      $calificacion: '8.2',
      $idObservaciones: 'asdf',
      $observaciones: 'hoy'
    },
    jsonNode: wrapper.Dec.Asignaturas
  });

  convert.addElement({
    name: 'Asignatura',
    attributes: {
      $idAsignatura: '002',
      $claveAsignatura: 'AXA',
      $nombre: 'Agricultura',
      $ciclo: '15',
      $calificacion: '8.2',
      $idObservaciones: 'asdf',
      $observaciones: 'hoy'
    },
    jsonNode: wrapper.Dec.Asignaturas
  });

  convert.addElement({
    name: 'Asignatura',
    attributes: {
      $idAsignatura: '003',
      $claveAsignatura: 'AXA',
      $nombre: 'Agricultura',
      $ciclo: '15',
      $calificacion: '8.2',
      $idObservaciones: 'asdf',
      $observaciones: 'hoy'
    },
    jsonNode: wrapper.Dec.Asignaturas
  });

  document.getElementById('json').value = JSON.stringify(wrapper);
};
