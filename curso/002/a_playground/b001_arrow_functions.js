
const quadrado = (numero) => {

   return numero**2
}


console.log(quadrado(3))

const evento = {
   nome: 'Festa de Aniversario',
   listaConvidados: ['aladin', 'mel', 'apolo', 'nina'],
   imprimirListaConvidados() {
      console.log('Lista de cinvidado para ' + this.nome)
      
      this.listaConvidados.forEach((cada) => {
         console.log(cada + ' está participando da ' + this.nome)
      })
      
   }
   /* imprimirListaConvidados: () => {
      console.log('Lista de cinvidado para ' + this.nome)
   } */
}

evento.imprimirListaConvidados()




// node b001_arrow_functions.js
/* 
9
Lista de cinvidado para Festa de Aniversario
aladin está participando da Festa de Aniversario
mel está participando da Festa de Aniversario
apolo está participando da Festa de Aniversario
nina está participando da Festa de Aniversario

*/


