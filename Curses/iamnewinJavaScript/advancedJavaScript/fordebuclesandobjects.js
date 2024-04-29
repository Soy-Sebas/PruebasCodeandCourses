// const car = {
//     engine: true,
//     steering: true,
//     speed: "slow"
// }

// const sportCar = Object.create(car)
// sportCar.speed = "fast"
// console.log("The sportCar object: ", sportCar)

// console.log('----- for-in is unreliable -----')
// for (prop in sportCar){
//     console.log(prop)
// }

// console.log('🤔', "Iterating over object AND its prototype!")

// console.log('----- for-of is reliable -----')
// for (prop of Object.keys(sportCar)){
//     console.log(prop + ": "+ sportCar[prop])
// }
// console.log('🎯', "Iterating over object's OWN PROPIERTIES only!")

///// más fácil:

const car = {
    engine: true
}
const sportsCar = Object.create(car)
sportsCar.speed = "fast"
console.log("The sportCar object: ", sportsCar)

for (prop in sportsCar){
    console.log('🤔', prop)
}

for (prop of Object.keys(sportsCar)){
    console.log('🎯', prop + ": " + sportsCar[prop])
}