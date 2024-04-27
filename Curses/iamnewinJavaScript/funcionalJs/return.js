// funcional programming

let currencyOne = 100
let currencyTwo = 0
let exchangeRate = 1.2

function convertCurrency(amount, rate){
    return amount * rate
}

currencyTwo = convertCurrency(currencyOne, exchangeRate)
console.log(currencyTwo)


// llamada de funciones - recursividad

let counter = 3;

function example() {
    console.log(counter)
    counter = counter -1 
    if (counter === 0) return
    example()
}

example()

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message,style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = 'color: tomato; font-size: 50px';
    if (reason=="birthday"){
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason == "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(reason, style);
    }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e','fae8e0','30px','You made it!','champions')

