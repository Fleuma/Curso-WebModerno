let valor // Não inicializado 
console.log(valor)

valor = null // ausência do valor, para zerar um variavel
console.log(valor)
// console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefined, usar apenas null
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)