
const fs = require('fs')


const dadosCarregados = fs.readFileSync('json_004_paraler.json')
const dadosJSON = dadosCarregados.toString()
const usuario = JSON.parse(dadosJSON)

usuario.nome = 'Aladin'
usuario.idade = 54

const usuarioJSON = JSON.stringify(usuario)
fs.writeFileSync('json_004_paraler.json', usuarioJSON)




// node json_004.js
/* 

altera o arquivo json


*/
 
 
 
