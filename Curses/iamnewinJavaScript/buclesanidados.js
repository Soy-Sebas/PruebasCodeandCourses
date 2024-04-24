//Nested loop → Bucles Anidados (Entre más bucles anidados haya pues más lento será la ejecución del código)

for (i = 1; i <= 2; i++) { // Outer loop (Externo)
    for (j = 1; j <= 7; j++) { // Inner Loop (Interno)
        console.log("Week " + i + " day " + j)
    }
}

for (let i = 2023; i<2025; i++){
    console.log(i)
    for (let j = 6; j < 9; j++){
        console.log("-----------", j)
    }
}


for(var i = 0; i <= 5; i++) {
    console.log("Hello");
  }