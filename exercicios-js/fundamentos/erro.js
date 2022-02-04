function tratarerroelancar(erro) {
    // throw new Error('....')    
    // throw 10
    // throw 'Error'
    throw {
        nome: erro.name,
        msg:  erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarerroelancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)