const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona no ultimo indice elementos a um array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento no indice 0 
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // Apartir do indice 2 adicionar 2 elementos, remover 0 elementos, caso fosse remover um elemento seria 2, 1 e os 'Elementos em seguida.
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // Massa deletado
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // Novo array, gera um novo array se baseando no numero do indice, clonagem.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)