 
//import chalk from 'chalk'
const chalk = require('chalk')
const fs = require('fs')



const acessarNotas = () => {
   return 'Suas notas...'
}

const adicionarNota = (titulo, corpo) => {

   const notas = carregarNotas()
   
   const notasDuplicadas = notas.filter((nota) => {
      return nota.titulo === titulo
   })
   
   if (notasDuplicadas.length === 0) {
      notas.push({ titulo: titulo, corpo: corpo })
      
      console.log('nova nota adicionada!')
   }
   else {
      console.log('Nota titulo ocupada!')
   }
   
   salvarNotas(notas)
}

const removerNota = (titulo) => {

   const notas = carregarNotas()
   const notasAManter = notas.filter((nota) => {
      return nota.titulo !== titulo
   })
   
   if (notas.length > notasAManter.length) {
      console.log(chalk.green.inverse('Nota removida!'))
      salvarNotas(notasAManter)
   }
   else {
      console.log(chalk.red.inverse('Nenhuma nota removida!'))
   }
   
}


const salvarNotas = (notas) => {
   const dadosJSON = JSON.stringify(notas)
   fs.writeFileSync('file015notas.json', dadosJSON)
}


const carregarNotas = () => {

   try {
      const dadosBuffer = fs.readFileSync('file015notas.json')
      const dadosJSON = dadosBuffer.toString()
      return JSON.parse(dadosJSON)
   }
   catch (e) {
      return []
   }

    
}



module.exports = { acessarNotas: acessarNotas, adicionarNota: adicionarNota, removerNota: removerNota }


