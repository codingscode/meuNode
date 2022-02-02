

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
      console.log('Titulo: ' + argv.titulo)
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


// node file011.js listar --titulo="meu titulo"
/* 
[
  '/home/misterhp/apps/node/node16/bin/node',
  '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file011.js',
  'listar',
  '--titulo=meu titulo'
]
Titulo: meu titulo

*/
