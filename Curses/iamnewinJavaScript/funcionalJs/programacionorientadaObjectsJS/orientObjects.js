
// principios de la programación Orientada a Objetos / Object Oriented Programming, OOP
let shoes = 100
let stateTax = 1.2

function totalPrice(shoes, tax){
    return shoes * tax
}

let toPay = totalPrice(shoes, stateTax)
console.log(toPay)


// OOP 1 
let purchasExample1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = purchasExample1.shoes * purchasExample1.stateTax
        console.log('Total Price:', calculation)
    }
}


purchasExample1.totalPrice() // 120

// OOP 2

let purchasExample2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = purchasExample2.shoes * purchasExample2.stateTax;
        console.log('Total Price:', calculation)
    }
}

purchasExample2.totalPrice() // 60

// OOP 3

let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = this.shoes * this.stateTax
        console.log('Total Price:', calculation)
    }
}
purchase1.totalPrice() // 120

let purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        let calculation = this.shoes * this.stateTax
        console.log('Total Price:', calculation)
    }
}
purchase1.totalPrice() // 60