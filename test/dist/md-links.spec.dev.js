"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable max-len */

/* eslint-disable no-undef */
var fetch = require('node-fetch');

var _require = require('../src/md-links'),
    esRuta = _require.esRuta,
    rutaAbsolut = _require.rutaAbsolut,
    esDir = _require.esDir,
    convertiraAbsolut = _require.convertiraAbsolut,
    isArchivo = _require.isArchivo,
    extMd = _require.extMd,
    mdFiles = _require.mdFiles,
    leerArchivo = _require.leerArchivo,
    obtenerLinks = _require.obtenerLinks,
    validater = _require.validater;

jest.mock('node-fetch');
var objeto = [{
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
  text: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
  file: "C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md"
}];
var objetoStatus = {
  status: 200,
  message: 'OK'
};
var resultado = [{
  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
  text: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
  file: "C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md",
  status: 200,
  message: 'OK'
}]; // const{verArchivo}= require("../src/md-links.js");
// const {fs} = require("fs");

describe('mdLinks', function () {
  // Debe verificar si ruta existe
  it('Debe verificar si ruta existe', function () {
    expect(esRuta("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js")).toBe(true);
  }); // Verificar si ruta no existe

  it('Debe verificar si ruta No existe', function () {
    expect(esRuta("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cl.js")).toBe(false);
  }); // prueba2 ver si es función//

  it('Debe verificar si es función', function () {
    expect(_typeof(isArchivo)).toBe('function');
  });
  /* it('should...', (done) => {
     try { expect(isArchivo(
      "C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md")).toBe(true)
          done()
     } catch (e){done(e);}
   });
   //tiene que volver falso cuando no es archivo
   it('should...', (done) => {
    try { expect
      (isArchivo
        ("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\READ.md")).toBe(false)
         done()
    } catch (e){done(e);}
  }); */
  // si es ruta absoluta dar true

  it('Debe verificar si es ruta absoluta y dar true', function () {
    expect(rutaAbsolut("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js")).toBe(true);
  }); // si No es ruta absoluta dar false

  it('Debe verificar si No es ruta absoluta y dar false', function () {
    expect(rutaAbsolut('src\\cl.js')).toBe(false);
  }); // tiene que volver true cuando es directorio o carpeta

  it('Debe volver true cuando es directorio o carpeta', function () {
    expect(esDir("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src")).toBe(true);
  }); // tiene que volver false cuando no es directorio o carpeta

  it('Debe volver false cuando no es directorio o carpeta', function () {
    expect(esDir("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md")).toBe(false);
  }); // Verificar si convierte ruta relativa o directorio/carpeta a ruta absoluta

  it('Debe Verificar si convierte ruta relativa o directorio/carpeta a ruta absoluta', function () {
    expect(convertiraAbsolut('src\\cli.js')).toBe("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js");
  }); // tiene que volver true cuando es archivo

  it('Debe volver true cuando es archivo', function () {
    expect(isArchivo("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md")).toBe(true);
  }); // tiene que volver falso cuando no es archivo

  it('Debe volver falso cuando no es archivo', function () {
    expect(isArchivo("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src")).toBe(false);
  }); // tiene que volver true cuando es .md

  it('Debe volver true cuando es .md', function () {
    expect(extMd("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\README.md")).toBe(true);
  }); // tiene que volver falso cuando no es .md

  it('Debe volver falso cuando no es .md', function () {
    expect(extMd("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src\\cli.js")).toBe(false);
  }); // tiene que volver un array de archivos Md filtrados del directorio

  it('Debe volver un array de archivos Md filtrados del directorio', function () {
    expect(mdFiles("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src")).toStrictEqual(["C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\src/prueba.md"]);
  }); // tiene devolver el contenido del archivo

  it('Debe devolver el contenido del archivo', function () {
    expect(leerArchivo("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md")).toEqual('Siguiendo otro camino completamente, podríamos usar[expresiones regulares (`RegExp`)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions.');
  }); // tiene devolver un array con objetos links, text y ruta

  it('Debe devolver un array con objetos links, text y ruta', function () {
    expect(obtenerLinks("C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md")).toStrictEqual([{
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      text: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      file: "C:\\Users\\N18\\OneDrive\\Escritorio\\Archivos\\LIM015-md-links\\test\\prueba2\\prueba20.md"
    }]);
  }); // tiene que verificar si es una funcion

  it('Debe verificar si es función', function () {
    expect(_typeof(validater)).toBe('function');
  }); // tiene que devolver un array con 5 objetos

  test('Debe devolver un mock promesa status 200', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetch.mockResolvedValue(objetoStatus);
            return _context.abrupt("return", Promise.all(validater(objeto)).then(function (data) {
              expect(data).toStrictEqual(resultado);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
});