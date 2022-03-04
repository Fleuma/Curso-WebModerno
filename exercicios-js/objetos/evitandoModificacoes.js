// Object.preventExtensions -- impede criação de atributos

const produto = Object.preventExtensions({
    nome: 'Qualquer,',
    preco: 1.99,
    tag: 'promocao'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal -- Impede a criação, exclusão de novas propriedades, embora ainda seja possível manipular os elementos do objetos já definidos.

const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado e constante, imutavel
