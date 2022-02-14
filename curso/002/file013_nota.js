
const fs = require('fs')


const acessarNotas = () => {
   return 'Suas notas...'
}

const adicionarNota = (titulo, corpo) => {

   const notas = carregarNotas()
   
   notas.push({ titulo: titulo, corpo: corpo })
   
   salvarNotas(notas)
}

const salvarNotas = (notas) => {
   const dadosJSON = JSON.stringify(notas)
   fs.writeFileSync('file013notas.json', dadosJSON)
}


const carregarNotas = () => {

   try {
      const dadosBuffer = fs.readFileSync('file013notas.json')
      const dadosJSON = dadosBuffer.toString()
      return JSON.parse(dadosJSON)
   }
   catch (e) {
      return []
   }

    
}



module.exports = { acessarNotas: acessarNotas, adicionarNota: adicionarNota }

