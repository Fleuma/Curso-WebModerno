// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // Congela um objeto, ou seja, ele não poderá ser mudado de qualquer maneira

pessoa.nome = 'Maria'
console.log(pessoa.nome)