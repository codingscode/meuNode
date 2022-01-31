

//import yargs from 'yargs'
const yargs = require('yargs')

// customizar yargs
yargs.version('1.1.0')

// criar comando listar
yargs.command({
   command: 'listar',
   describe: 'Listar suas notas',
   handler: () => {
      console.log('Listando suas notas')
   }
})

//criar comando ler
yargs.command({
   command: 'ler',
   describe: 'Ler suas notas',
   handler: () => {
      console.log('Lendo suas notas')
   }
})


// adicionar, remover, ler, listar





console.log(process.argv)
console.log(yargs.argv)

// node file007.js --help


// node file007.js listar









