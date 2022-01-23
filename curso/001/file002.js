
const sistemaArquivo = require('fs')

sistemaArquivo.writeFileSync('file002.txt', 'Este arquivo foi criado por Node.js!')

// terminal -> node file002.js
// um arquivo é criado se nao existe, caso exista será sobrescrito


