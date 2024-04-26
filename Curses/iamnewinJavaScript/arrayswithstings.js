let veggies = ['Onion', 'Parsley', 'Carrot']
console.log(veggies.length)
console.log(veggies[0])
console.log(veggies[1])

for(let i = 0; i< veggies.length; i++){
    console.log(veggies[i])
}

// stings are iterable, too! 

let greeting = 'Howdy'
console.log(greeting.length)
console.log(greeting[0])
console.log(greeting[1])

for (let i = 0; i<greeting.length; i++){
    console.log(greeting[i])
}

// string !== arrays (diferentes)

let greet = 'Hello '
let user = 'Sebastian'
// console.log(greet.pop()) → Error esto porque pop no es una función. Esto me indica que no puedo ejecutar todos lo métodos de arrays en cadenas (texto)
console.log(greet + user) // Hello Sebastian
console.log(greet.concat(user)) // Hello Sebastian
