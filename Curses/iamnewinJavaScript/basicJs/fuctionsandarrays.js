// Función con parametros
function addTwoNums(a,b){
    let c = a+b
    console.log(c)
}
addTwoNums(2,2)

// Arrays [0, 1, 2, 3, 4, 5, ...]
let train1 = ["Wheat", "Barley", "Potato", "Salt", "Rocks"]
console.log(train1[0])

function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("test", "t")