function pessoa() {
    this.idade = 0
    
    const self = this // Ao armazenar o this, ele não pode variar.

    /* setInterval(function () {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000); */

    // # This nesse caso pode variar, então podemos usar a função bind ou simplesmente usar uma arrow function(this no contexto lexico) para que o this não varie, ou até mesmo declarar o this numa constante.

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000);
}

new pessoa