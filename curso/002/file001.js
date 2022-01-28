

//const validador = require('validator')

import validador from 'validator'

console.log('---------------------')
console.log(validador.isEmail('aladin@gmail.com'))
console.log(validador.isEmail('zacarias123'))
console.log(validador.isURL('https://mead.io'))
console.log(validador.isURL('https//invalido.com'))

// node file001.js

/* 
true
false
*/
