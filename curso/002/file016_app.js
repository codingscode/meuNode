

const notas = require('./file016_nota.js')

const yargs = require('yargs')


// customizar yargs
yargs.version('1.1.0')

// criar comando adicionar
yargs.command({
   command: 'adicionar',
   describe: 'Adicionar um nota nova',
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
   handler(argv) {
      notas.adicionarNota(argv.titulo, argv.corpo)
   }
})


// criar comando listar
yargs.command({
   command: 'listar',
   describe: 'Listar suas notas',
   handler() {
      notas.listarNotas()
   }
})

//criar comando ler
yargs.command({
   command: 'ler',
   describe: 'Ler suas notas',
   builder: {
      titulo: {
         describe: 'Titulo nota',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notas.lerNota(argv.titulo)
   }
})

// comando remover
yargs.command({
   command: 'remover',
   describe: 'Remover suas notas',
   builder: {
      titulo: {
         describe: 'Nota titulo',
         demandOption: true,
         type: 'string'
      }
   },
   handler(argv) {
      notas.removerNota(argv.titulo)
   }
})


// adicionar, remover, ler, listar





console.log(process.argv)

yargs.parse()
//console.log(yargs.argv)


// node file016_app.js ler --titulo="t"
/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file016_app.js',
   'ler',
   '--titulo=t'
]
Nota não encontrada!

*/

// node file016_app.js ler --titulo="eletronicos"
/* 
[
  '/home/misterhp/apps/node/node16/bin/node',
  '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file016_app.js',
  'ler',
  '--titulo=eletronicos'
]
eletronicos
pendrive
*/

// node file016_app.js 
/* 


*/


