function soboanoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado ' + nota)
    } 
}

soboanoticia(8.1)
soboanoticia(6.1)

function seforverdadeiroeufalo(valor) {
    if (valor) {
        console.log(`È verdade... ${valor}`)
    }
}

seforverdadeiroeufalo()
seforverdadeiroeufalo(null)
seforverdadeiroeufalo(undefined)
seforverdadeiroeufalo(NaN)
seforverdadeiroeufalo('')
seforverdadeiroeufalo(0)
seforverdadeiroeufalo(-1)
seforverdadeiroeufalo(' ')
seforverdadeiroeufalo('?')
seforverdadeiroeufalo([])
seforverdadeiroeufalo([1, 2])
seforverdadeiroeufalo({})