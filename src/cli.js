#!/usr/bin/env node

const chalk = require('chalk');
const { mdLinks } = require('./index');

const {
  linksStats, enValidate, statsValidate, defaultOption, mensajeHelp, rutaSinLinks, rutaNoExiste,
} = require('./cli-fn');

// const rutadelUsuario = process.argv[2];
const option = process.argv.slice(2);
const validar = option.includes('--v');
const stats = option.includes('--s');

if (option.length === 1) {
  mdLinks(process.argv[2], { validate: true })
    .then((res) => console.table(chalk.greenBright(defaultOption(res))))
    .catch((reject) => {
      if (reject === 'Ruta no existe') {
        console.log(rutaNoExiste);
      } else {
        console.log('hola1', rutaSinLinks);
      }
    });
} else if (validar) {
  mdLinks(process.argv[2], { validate: true })
    .then((res) => console.log(enValidate(res)))
    .catch((e) => console.log(rutaSinLinks, e));
} else if (stats) {
  mdLinks(process.argv[2], { validate: true })
    .then((res) => console.table(linksStats(res)))
    .catch((e) => console.log(rutaSinLinks, e));
} else if (option[1] === '--stats' && option[2] === '--validate') {
  mdLinks(process.argv[2], { validate: true })
    .then((res) => {
      console.table(statsValidate(res));
    })
    .catch((e) => console.log(rutaSinLinks, e));
} else {
  mdLinks(process.argv[2], { validate: true })
    .then(console.log(mensajeHelp))
    .catch((e) => console.log(rutaSinLinks, e));
}
