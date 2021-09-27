const chalk = require('chalk');
// const rutadelUsuario = process.argv[2];
// estadisticas de los links

const linksStats = (arr) => {
  const total = [];
  const unique = new Set();
  arr.forEach((element) => {
    total.push(element.href);
    unique.add(element.href);
  });
  return chalk.bold.bgGreen(`Total : ${total.length}\nUnique : ${unique.size}`);
};
// console.log(linksStats([rutadelUsuario]));

// console.log(linksStats([rutadelUsuario]));
const enValidate = (arr) => arr.forEach((obj) => {
  const path = chalk.bold.bgBlue(`Path: ${obj.file} `);
  const link = chalk.bold.bgBlue(`Link: ${obj.href}  `);
  const text = chalk.bold.bgBlue(`Text: ${obj.text.substr(0, 50)} `);
  let status;
  if (obj.message === 'OK') {
    status = chalk.bold.bgGreen(`Status: ${obj.status} ${obj.message} `);
  } else if (obj.message === 'FAIL') {
    status = chalk.bold.bgRed(`Status: ${obj.status} ${obj.message} `);
  }
  return console.log(chalk.bold.bgRed(`\n${path}\n${link}\n${text}\n${status}`));
});

const brokenLinks = (array) => array.filter((element) => element.message > 400);

const statsValidate = (arr) => {
  const total = [];
  const unique = new Set();
  arr.forEach((element) => {
    total.push(element.href);
    unique.add(element.href);
  });
  return chalk.bold.bgGreen(`Total : ${total.length}\nUnique : ${unique.size}\nBroken :${brokenLinks.length}`);
};

const defaultOption = (arr) => arr.forEach((obj) => {
  const path = chalk.bold.bgMagenta(`Path: ${obj.file} `);
  const link = chalk.bold.bgMagenta(`Link: ${obj.href} `);
  const text = chalk.bold.bgMagenta(`Text: ${obj.text}`);
  return console.log(`\n${path}\n${link}\n${text}`);
});

const respuesta = chalk.bold.bgGreen(` 
--validate : devuelve el href(link), title(titulo), el status (estado) y message(mensaje) de cada link. 
--stats: devuelve el resultado total (cantidad total de links), Unique(cantidad de links que no se repiten).  
--validate --stats : devuelve Total, Unique y broken(links fail)`);

const mensajeHelp = chalk.bold.bgBlue('¿Necesitas Ayuda?', respuesta);

const rutaSinLinks = chalk.bold.yellowBright('No tienes links');

const rutaNoExiste = chalk.bold.redBright('No Existe ruta');

module.exports = {
  linksStats, enValidate, statsValidate, defaultOption, mensajeHelp, rutaSinLinks, rutaNoExiste,
};