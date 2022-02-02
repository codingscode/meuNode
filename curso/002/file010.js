

//import yargs from 'yargs'
const yargs = require('yargs')

// customizar yargs
yargs.version('1.1.0')

// criar comando listar
yargs.command({
   command: 'listar',
   describe: 'Listar suas notas',
   builder: {
      titulo: {
         describe: 'Titulo da nota',
         demandOption: true,
         type: 'string'
      }
   },
   handler: (argv) => {
      console.log(`Listando suas notas`)
      console.log(argv)
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

yargs.parse()
//console.log(yargs.argv)


// node file010.js listar --titulo="meu titulo"
/* 
[
    '/home/misterhp/apps/node/node16/bin/node',
    '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file010.js',
    'listar',
    '--titulo=meu titulo'
]
Listando suas notas
{ _: [ 'listar' ], titulo: 'meu titulo', '$0': 'file010.js' }
*/

