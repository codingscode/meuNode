

const notas = require('./file015_nota.js')

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
   handler(argv) {
      notas.adicionarNota(argv.titulo, argv.corpo)
   }
})

//criar comando ler
yargs.command({
   command: 'ler',
   describe: 'Ler suas notas',
   handler() {
      console.log('Lendo suas notas')
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


// node file015_app.js remover --titulo="algum titulo"
/* 


*/

// node file015_app.js remover --titulo="papelaria"


// node file015_app.js remover --titulo="t"
/* 


*/


