

const notas = require('./file013_nota.js')

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
      notas.adicionarNota(argv.titulo, argv.corpo)
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


// node file013_app.js listar --titulo="t" --corpo="c"
/* 
[
   '/home/misterhp/apps/node/node16/bin/node',
   '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file013_app.js',
   'listar',
   '--titulo=t',
   '--corpo=c'
]
arquivo file013notas.json criado
*/












