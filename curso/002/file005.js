

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

// node file005.js --help
/* 
[
    '/home/misterhp/apps/node/node16/bin/node',
    '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file005.js',
    '--help'
]
Opções:
--help     Exibe ajuda                                              [booleano]
--version  Exibe a versão                                           [booleano]
*/

// node file005.js --version
/* 
[
    '/home/misterhp/apps/node/node16/bin/node',
    '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file005.js',
    '--version'
]
1.0.0
*/













