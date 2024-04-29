// Destructuring → Copiar un elemento de su carpeta a otra ubicación
let {PI} = Math;
PI; // → 3.1415

let {pi} = Math;
pi; // → undefined

PI === Math.PI;
// → true

PI = 1;
// → 1

PI === Math.PI;
// → false

//En JavaScript, es posible extraer las propiedades de los objetos en variables distintas utilizando la desestructuración.