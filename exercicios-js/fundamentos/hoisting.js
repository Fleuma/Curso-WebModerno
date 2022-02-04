// Hoisting é um comportamento padrão da linguagem que envia as declarações das variaveis para cima do código.

console.log('a =', a)
var a = 2
console.log('a =', a)


console.log('b =', b)
let b = 2
// console.log('b =' b) Não funciona com let