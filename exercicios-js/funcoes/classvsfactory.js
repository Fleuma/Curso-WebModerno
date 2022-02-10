class pessoa {
    constructor(nome) {
        this.nome = nome
        }

        falar() {
            console.log(`Meu nome é ${this.nome}`)
        }
}

const p1 = new pessoa('João')
p1.falar()

const criarpessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new pessoa('João')
p2.falar()