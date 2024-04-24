// Condicional if else

let result = 50
if (result > 40) {
    console.log("Congratulations you passed")
} else {
    console.log("Unfortunately you did not pass.")
}

// Sentencias Condicionales (Cuando usamos varias condiciones se puede usar varias condicionales como if, else,if else, pero también →  Switch

let place = 'first'

if (place == 'first') {
    console.log('Gold')
} else if (place == 'second') {
    console.log('Silver')
} else if (place == 'third') {
    console.log('Bronze')
} else {
    console.log('No medal')
}

switch (place) {
    case 'first':
        console.log('Gold')
        break
    case 'second':
        console.log('Silver')
        break
    case 'third':
        console.log('Bronze')
        break
    default:
        console.log('No medal')
}

// Bucles son los que ayudan a que una tarea se repita constantemente (FOR, WHILE, NESTED → bucles anidados)

//Bucle FOR
for (let i = 1; i < 20; i++) {
    console.log(i);
}

// Example 2

for (let i = 1; i <= 3; i++) {
    console.log(i)
}
console.log('Go')

// Example 3 - Decreción
for (let i = 5; i > 0; i--) {
    console.log(i)
}
console.log('Counting finished!')


//Bucle WHILE

let i = 1
while (i <= 5) {
    console.log(i)
    i = i + 1;
}
console.log('Counting Completed!')

let i2 = 5
while (i2 > 0) {
    console.log(i2)
    i2 = i2 - 1;
}
console.log('Countdown Finished!')

let year = 2018
while (year <= 2022) {
    console.log(year)
    year++;
}
console.log('Pandemia')