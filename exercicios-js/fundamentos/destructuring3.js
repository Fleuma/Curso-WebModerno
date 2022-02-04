function aleatorio({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 500, min: 400 }
console.log(aleatorio({ max: 50, min: 40}))
console.log(aleatorio(obj))
console.log(aleatorio({}))
// console.log(aleatorio()) erro, pois propriedade destructure não pode ser undefined ou null