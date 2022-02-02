

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
      },
      corpo: {
         describe: 'Nota corpo',
         demandOption: true,
         type: 'string'
      }
   },
   handler: (argv) => {
      console.log('Titulo: ' + argv.titulo)
      console.log('Corpo: ' + argv.corpo)
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


// node file012.js listar --titulo="Comprar"
/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file012.js',
   'listar',
   '--titulo=Comprar'
]
file012.js listar

Listar suas notas

Opções:
--help     Exibe ajuda                                              [booleano]
--version  Exibe a versão                                           [booleano]
--titulo   Titulo da nota                               [string] [obrigatório]
--corpo    Nota corpo                                   [string] [obrigatório]

Falta argumento obrigatório: corpo

*/

// node file012.js listar --titulo="Comprar" --corpo="comprar o que quero"
/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file012.js',
   'listar',
   '--titulo=Comprar',
   '--corpo=comprar o que quero'
]
Titulo: Comprar
Corpo: comprar o que quero
*/


