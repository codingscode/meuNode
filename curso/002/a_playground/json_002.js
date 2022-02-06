
const fs = require('fs')


const livro = {
    titulo: 'Ego é o inimigo',
    autor: 'Ryan Holiday'
}

// object -> string
const livroJSON = JSON.stringify(livro) // é uma string
fs.writeFileSync('json_002.json', livroJSON)




// node json_002.js
/* 
é criado um arquivo json_002.json



*/
 
 
 
