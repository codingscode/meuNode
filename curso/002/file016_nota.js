 
//import chalk from 'chalk'
const chalk = require('chalk')
const fs = require('fs')



const acessarNotas = () => {
   return 'Suas notas...'
}

const adicionarNota = (titulo, corpo) => {

   const notas = carregarNotas()
     
   const notaDuplicada = notas.find((nota) => nota.titulo === titulo)
   
   
   if (!notaDuplicada) {
      notas.push({ titulo: titulo, corpo: corpo })
      
      salvarNotas(notas)
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

const listarNotas = () => {
   const notas = carregarNotas()
   
   console.log(chalk.inverse('Suas notas'))
   notas.forEach( (cada) => {
      console.log(cada.titulo)
   } )
}

const lerNota = (titulo) => {
   const notas = carregarNotas()
   const nota = notas.find((nota) => nota.titulo === titulo)

   if (nota) {
      console.log(chalk.inverse(nota.titulo))
      console.log(nota.corpo)
   }
   else {
      console.log(chalk.red.inverse('Nota não encontrada!'))
   }

   
}


const salvarNotas = (notas) => {
   const dadosJSON = JSON.stringify(notas)
   fs.writeFileSync('file016notas.json', dadosJSON)
}


const carregarNotas = () => {

   try {
      const dadosBuffer = fs.readFileSync('file016notas.json')
      const dadosJSON = dadosBuffer.toString()
      return JSON.parse(dadosJSON)
   }
   catch (e) {
      return []
   }

    
}



module.exports = { acessarNotas: acessarNotas, adicionarNota: adicionarNota, removerNota: removerNota, 
                   listarNotas: listarNotas, lerNota: lerNota }


