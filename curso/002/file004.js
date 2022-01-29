

const comando = process.argv[2]


if (comando === 'adicionar') {
   console.log('adicionando nota!')
}
else {
   console.log('comando nao encontrado!')
}


/* 
// node file004.js adicionar
adicionando nota!
*/

/* 
// node file004.js outro
comando nao encontrado!
*/


// node file004.js adicionar --title="este eh meu titulo"
console.log(process.argv)

/*
[
  '/home/misterhp/apps/node/node16/bin/node',
  '/home/misterhp/Programacao/Curso Node/meuNode/curso/002/file004.js',
  'adicionar',
  '--title=este eh meu titulo'
]

*/







