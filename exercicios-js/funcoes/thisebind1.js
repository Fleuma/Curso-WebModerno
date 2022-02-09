const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e orientar objeto

const falardepessoa = pessoa.falar.bind(pessoa)
falardepessoa(  )