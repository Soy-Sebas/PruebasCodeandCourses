// MÉTODO RANDOM

//Math.random()

//Generate a decimal number berween 0 and 0.99 (permite generar un número decimal entre 0 y 0.99)
Math.random()

//Save it to a varible
let decimal = Math.random()

// Log the value of decimal to the console
console.log(decimal)

// log the value of decimal MULTIPLIED by 10

console.log(decimal * 10)

// MÉTODO CEIL - Se utiliza para redondear cualquier número decimal al entero más cercano (no puede redondear hacía atras)

let rounded = Math.ceil(0.99)
let rounded2 = Math.ceil(2.45)
console.log(rounded, rounded2)


// RANDOM INTEGRADO

let randomCeil = Math.random() *10
let rounded3 = Math.ceil(randomCeil)
console.log(rounded3)