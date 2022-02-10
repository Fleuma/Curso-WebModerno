function carro(velocidademaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeatual = 0

    // Metodo publico
    this.acelerar = () => {
        if (velocidadeatual + delta <= velocidademaxima) {
            velocidadeatual += delta
        } else {
            velocidadeatual = velocidademaxima
        }
    }

    // Metodo publico 
    this.getvelocidadeatual = () => {
        return velocidadeatual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeatual())

const ferrari = new carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeatual())