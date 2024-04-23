// this is a comment!

/*
this
is
a
multi-line
comment
*/

/* this is a multi-line comment on a single line */

/////////////////////////////////////////////////////////////////////////////

// operations:
// console.log(2+2)
// console.log(1+2+3+4+5)
// console.log(20-18)
// console.log(2*3)
// console.log(8/1)
// // console.log(3>2)
// // console.log(2>3)
// // console.log(10 == 10)

// // strings → cadenas: Es una colección de caracteres encerrados entre comillas:
// // console.log('Hola Mundo')
// // console.log("Hola Mundo")

// // booleans → true or false
// console.log(100 == "100") //comprueba el valor "Igualdad"
// console.log(100 === "100") //comprueba el valor y el tipo "Igualdad estricta"
// console.log(1 != 1) 
// console.log(1 !== "1") //comprueba el valor y el tipo "Igualdad estricta"

/////////////////////////////////////////////////////////////////////////////

//Operador Lógico &&
let score = 8;
console.log("Mid-level skills: ", score>0 && score<10);

//Operador Lógico ||

let timeRemaining = 0
let energy = 10

console.log("Game Over: ", timeRemaining == 0 || energy == 0)


//Operador Lógico %

let num1 = 2
let num2 = 5
let test1 = num1 % 2
let test2 = num2 % 2
let result1 = test1 == 0
let result2 = test2 == 0

console.log("Is", num1, "an even number", result1)
console.log("Is", num2, "an even number", result2)

// Operador Lógico +

console.log(5+10)

// Concatenar númeross y cadenas utilizando el operador +

let now = "Now in "
let three = 3
let d = "D!"


console.log(now+three+d)

// Utilizar el operador += para acumular valores en una variable.

let counter = 0
counter += 5
counter += 3

console.log(counter)

