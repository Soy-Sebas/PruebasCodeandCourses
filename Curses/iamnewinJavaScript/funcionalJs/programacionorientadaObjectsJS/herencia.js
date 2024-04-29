let bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

let eagle1 = Object.create(bird) // prototipe object
console.log("eagle1: ", eagle1)


console.log("eagle 1 has wings:", eagle1.hasWings)
console.log("eagle 1 has fly:", eagle1.canFly)
console.log("eagle 1 has feather:", eagle1.hasFeathers)

// podemos crear tantos objetos queramos
let eagle2 = Object.create(bird)
console.log("ealge 2 has wings:", eagle2.hasWings)

let penguin1 = Object.create(bird)
penguin1.canFly = false;
console.log("penguin1: ", penguin1)
console.log("penguin1 has wings:", penguin1.hasWings)
console.log("penguin1 has feather:", penguin1.hasFeathers)


