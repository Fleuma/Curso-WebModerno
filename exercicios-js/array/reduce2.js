const alunos = [{
        nome: 'João',
        nota: 7.3,
        bolsista: false
    },
    {
        nome: 'Maria',
        nota: 9.2,
        bolsista: true
    },
    {
        nome: 'Pedro',
        nota: 9.8,
        bolsista: false
    },
    {
        nome: 'Ana',
        nota: 8.7,
        bolsista: true
    },
]

// 1) Todos os alunos são bolsistas?

let resultado1 = alunos.map(a => a.bolsista).reduce((acumulado, atual) => {
    if (acumulado && atual) {
        return true
    } else {
        return false 
    }
})

console.log(resultado1)

// 2) Algum aluno é bolsista? 

const alunosBolsa = (res, bolsista) => res || bolsista // retorno implicito -- armazenagem do "callback" no reduce apartir de uma variavel/constantes.
console.log(alunos.map(a => a.bolsista).reduce(alunosBolsa))