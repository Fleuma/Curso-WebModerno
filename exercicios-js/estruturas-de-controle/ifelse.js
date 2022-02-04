const imprirmirresultado = (nota) => {
    if (nota >= 7) {
        console.log('Aprovado!!')
    } else {
        console.log('Reprovado')
    }
}

imprirmirresultado(10)
imprirmirresultado(4)
imprirmirresultado('Epa!') // Cuidado!!