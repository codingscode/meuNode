

//import yargs from 'yargs'
const yargs = require('yargs')

// customizar yargs
yargs.version('1.1.0')

// criar comando adicionar
yargs.command({
   command: 'adicionar',
   describe: 'Adicionar um nota nova',
   handler: () => {
      console.log('adicionando nova nota!')
   }
})

// criar comando remover
yargs.command({
   command: 'remover',
   describe: 'Remover uma nota',
   handler: () => {
      console.log('Removendo a nota')
   }
})


// adicionar, remover, ler, listar


console.log(process.argv)
console.log(yargs.argv)

// node file006.js --help
/* 
[
    '/home/misterhp/apps/node/node16/bin/node',
    '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file006.js',
    '--help'
]
file006.js [comando]

Comandos:
file006.js adicionar  Adicionar um nota nova

Opções:
--help     Exibe ajuda                                              [booleano]
--version  Exibe a versão                                           [booleano]

*/

// node file006.js adicionar
/* 
[
    '/home/misterhp/apps/node/node16/bin/node',
    '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file006.js',
    'adicionar'
]
adicionando nova nota!
{ _: [ 'adicionar' ], '$0': 'file006.js' }
*/

// node file006.js remover
/* 
[
    '/home/misterhp/apps/node/node16/bin/node',
    '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file006.js',
    'remover'
]
Removendo a nota
{ _: [ 'remover' ], '$0': 'file006.js' }
*/

