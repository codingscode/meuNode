
// links.mead.io/arrow-challenge

// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tarefas = {
   tarefas: [{
       texto: 'Compras de supermercado',
       completo: true
   },{
       texto: 'Limpar quintal',
       completo: false
   }, {
       texto: 'Curso de Filmagem',
       completo: false
   }],
   acessarTarefasFazer() {
      const tarefasAFazer = this.tarefas.filter( (cada) => {
         return cada.completo === false
      })
      return tarefasAFazer
   }


}

console.log(tarefas.acessarTarefasFazer())


// node b002_arrow_function_desafio.js
/* 
[
  { texto: 'Limpar quintal', completo: false },
  { texto: 'Curso de Filmagem', completo: false }
]

*/
