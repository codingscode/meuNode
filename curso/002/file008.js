

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
         describe: 'Titulo da nota'
      }
   },
   handler: (argv) => {
      console.log(`Listando suas notas ${argv}`)
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


// node file008.js listar --titulo="lista de compras"
/* 
[
  '/home/misterhp/apps/node/node16/bin/node',
  '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file008.js',
  'listar',
  '--titulo=lista de compras'
]
Listando suas notas [object Object]
{ _: [ 'listar' ], titulo: 'lista de compras', '$0': 'file008.js' }
*/

// node file008.js listar
/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file008.js',
   'listar'
]
Listando suas notas [object Object]
{ _: [ 'listar' ], '$0': 'file008.js' }
*/



