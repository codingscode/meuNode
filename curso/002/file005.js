

//import yargs from 'yargs'
const yargs = require('yargs')


console.log(process.argv)
console.log(yargs.argv)

// node file005.js adicionar --title="Coisas para comprar"

/*
[
    '/home/misterhp/apps/node/node16/bin/node',
    '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file005.js',
    'adicionar',
    '--title=Coisas para comprar'
]
{
    _: [ 'adicionar' ],
    title: 'Coisas para comprar',
    '$0': 'file005.js'
}
*/  




