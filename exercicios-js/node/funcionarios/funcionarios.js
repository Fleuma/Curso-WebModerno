const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

nacionalidadeChinesa = func => {
    if (func.pais == 'China' && func.genero == 'F') {
        return true
    }
    return false
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    console.log(funcionarios.filter(e => nacionalidadeChinesa(e)).sort((f1, f2) => f1.salario - f2.salario)[0])
})