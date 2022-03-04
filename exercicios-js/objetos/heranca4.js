function MeuObjeto() {
    console.log(MeuObjeto.prototype)
}

const obj1 = new MeuObjeto // Ao usar a função construtora, os objetos criados apartir do new e da função possui a mesma funcionalidade que o Object.create, já que por sua vez, ele também realiza uma cópia dos pares chave-valor. Pois o prototype será aplicado, reação em cadeia.
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = () => {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumo

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)