// Condicional if else

let result = 50
if (result > 40){
    console.log("Congratulations you passed")
}else{
    console.log("Unfortunately you did not pass.")
}

// Sentencias Condicionales (Cuando usamos varias condiciones se puede usar varias condicionales como if, else,if else, pero también →  Switch

let place = 'first'

if(place == 'first'){
    console.log('Gold')
} else if(place == 'second'){
    console.log('Silver')
} else if(place == 'third'){
    console.log('Bronze')
} else {
    console.log('No medal')
}

switch(place){
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