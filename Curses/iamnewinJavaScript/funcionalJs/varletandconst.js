var keyword

// 1. We CAN access a var variable before initialization...
    //... as long as the var variable IS EVENTUALLY INITIALIZED
    //... ANYWHERE in our code
console.log(user)

// 2. We CAN declare and redeclare the same var variable without errors
var user = "Mary"
var user = "Joanna"
var user = "Mark"

console.log(user)
var user


///////////////////////////////////////////////////////

// let keyword
// // 1. We CANNOT access a let variable before we declare it / No podemos acceder a una variable let antes de declararla
// console.log(user); // error
// let user;

// 2. We can declare an unassigned variable with let / Podemos declarar una variable no asignada con let
// let user;
// console.log(user) // undefined

// 3. We CAN'T redeclare a let variable /  No podemos volver a declarar una variable let
// let user = "Anna"

// 4. But we CAN re-assign it
let user;
console.log(user)
user = "Anna";
console.log(user)


//////////////////////////////////////////////////////////

// const keyword

// 1. The const variable MUST BE INITIALIZED / 
// console.log(user) // Error!
// const user;

// 2. We CAN'T access the const variable before initialization
// console.log(user) // Unexpected token error
// const user = "Andrew"

// 3. We CAN'T redeclare a const variable
// const user = "Andrew"
// user = "Anna" // NO!