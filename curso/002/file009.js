

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
         //demandOption: true,
         //type: 'string'
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


// node file009.js.js listar --titulo="lista de compras"


// node file009.js listar
/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file009.js',
   'listar'
]
file009.js listar

Listar suas notas

Opções:
--help     Exibe ajuda                                              [booleano]
--version  Exibe a versão                                           [booleano]
--titulo   Titulo da nota                                        [obrigatório]

Falta argumento obrigatório: titulo
*/

// node file009.js listar --titulo
/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file009.js',
   'listar',
   '--titulo'
]
Listando suas notas [object Object]
{ _: [ 'listar' ], titulo: true, '$0': 'file009.js' }
*/

/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file009.js',
   'listar',
   '--titulo'
]
Listando suas notas [object Object]
{ _: [ 'listar' ], titulo: '', '$0': 'file009.js' }
*/

// node file009.js listar --titulo="meu titulo"
/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file009.js',
   'listar',
   '--titulo=meu titulo'
]
Listando suas notas [object Object]
{ _: [ 'listar' ], titulo: 'meu titulo', '$0': 'file009.js' }
*/








