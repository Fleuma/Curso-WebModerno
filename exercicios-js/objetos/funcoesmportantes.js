const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false, // Essa propriedade('chave') pode ser listada?
    writable: false, // Essa propriedade pode ser modificada? false não, true sim
    value: '01/01/2019' // Coloca o valor da nova propriedade
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {
    a: 1
}
const o1 = {
    b: 2
}
const o2 = {
    c: 3,
    a: 4
}
const obj = Object.assign(dest, o1, o2) // Assign se usa para concatenar os objetos. 
// Se em um objeto houver 2 chaves iguais, a última chave será quem irá sobrescrever a primeira.

console.log(obj)

Object.freeze(obj) // Congela os valores dos objetos.
obj.c = 1234
console.log(obj)