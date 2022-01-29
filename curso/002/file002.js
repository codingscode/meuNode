import os from 'os' //  const os = require("os")

import chalk from 'chalk'  //const chalk = require("chalk")


const mensagemVerde = chalk.bold.magenta('Sucesso!')

console.log(mensagemVerde)
console.log(chalk.blue.bold('Sucesso outro!'))
console.log(chalk.blue.inverse.bold('Sucesso outro!'))

