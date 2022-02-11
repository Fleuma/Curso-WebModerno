function Pessoa(name) {
    this.name = name

    this.falar = function() {
        console.log(`Meu nome é ${this.name}`)
    }
}

const nome1 = new Pessoa('Pedro')
nome1.falar()


function pessoa(nome) {
        this.nome = nome
        this.falar = () => console.log(`Meu nome é ${this.nome}`)
        }

        const nome22 =new pessoa('Pedrinho')
        nome22.falar()