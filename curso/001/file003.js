
const fs = require('fs')

//fs.writeFileSync('file003.txt', 'Conteudo já presente\nPrévio')

// sem sobrescrever, acrescentando conteudo

fs.appendFileSync('file003.txt', ' Acrescentando conteudo.\nMais uma linha')
