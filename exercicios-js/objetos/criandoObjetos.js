// usando a notação literal
const obj1 = {

}
console.log(obj1)

// Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Função construtoras

function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1- desc)
    }
}