

const livro = {
   titulo: 'Ego é o inimigo',
   autor: 'Ryan Holiday'
}

// object -> string
const livroJSON = JSON.stringify(livro) // é uma string
console.log(livroJSON)
console.log(livroJSON.titulo) // nao traz valor

// string -> json object
const parsedDados = JSON.parse(livroJSON)
console.log(parsedDados.autor)



// node json_001.js
/* 
{"titulo":"Ego é o inimigo","autor":"Ryan Holiday"}
undefined
Ryan Holiday
*/


