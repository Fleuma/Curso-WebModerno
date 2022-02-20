soma = () => {
    let soma = 0
    for (i in arguments) { // Arguments é necessário quando não se tem certeza da quantidade de valores que o usuário usará na function.
        soma+= arguments[i] // Soma os valores até que não haja mais
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))