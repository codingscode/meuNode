
const fs = require('fs')


const acessarNotas = () => {
   return 'Suas notas...'
}

const adicionarNota = (titulo, corpo) => {

   const notas = carregarNotas()
}

const carregarNotas = () => {

   const dadosBuffer = fs.readFileSync('file013notas.json')
   const dadosJSON = dadosBuffer.toString()
   return JSON.parse(dadosJSON) 
}



module.exports = { acessarNotas: acessarNotas, adicionarNota: adicionarNota }

