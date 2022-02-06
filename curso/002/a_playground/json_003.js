
const fs = require('fs')


const dadosCarregados = fs.readFileSync('json_003_paraler.json')
const dadosJSON = dadosCarregados.toString()

const dados = JSON.parse(dadosJSON)


console.log(dados)
console.log(dados.raca)



// node json_003.js
/* 
{ nome: 'aladin', idade: 4, raca: 'pitcher' }
pitcher


*/
 
 
 
