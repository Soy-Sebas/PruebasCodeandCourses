// Objects → Es una colección inalterable, no iterable de pares clave-valor y se utilizan cuando es necesario almacenar y posteriormente acceder a un valor bajo una clave.
const car = {
    owner: 'John',
    color: 'red',

    engineOn: function(){
        console.log('engine is on')
    }
}

// 

// Array → Es una colección iterable ordenada de valores. Se utilizan cuando es necesario almacenar y acceder posteriormente a un valor bajo un índice.

let veggies = ['Onion', 'Parsley', 'Carrot']
// 0, 1, 2, ...


const grades = [75, 95, 90, 85, 80, 85]
let gradeSum = 0

for (i = 0; i < grades.length; i++){
    gradeSum += gradeSum[i]
}

console.log(gradeSum / grades.length)
// 85

// map → es como un array porque es iterable (un map no es un object) 
// set → es una colección en la que cada elemento de la colección debe ser único.

const house1 = 'red'
const house2 = 'blue'
const house3 = 'red'

const houses = new Set()

houses.add(house1).add(house2).add(house3)

console.log(houses) // Set(2){'red', 'blue'}
