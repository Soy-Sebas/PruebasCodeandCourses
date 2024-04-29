const meal = ["soup", "steak", "ice cream"]
    let [starter] = meal;
    console.log(starter);


    let food = "Chocolate";
    console.log(`My favourite food is ${food}`); // soup

    let set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.add(2);
    set.add(1); // 1,2,3 


    let obj = {
        key: 1,
        value: 4
    };

    let output = { ...obj };
    output.value -= obj.key;

    console.log(output.value); // 3

    function count(...basket) {
        console.log(basket.length)
    }

    count(10, 9, 8, 7, 6); // 5

    function count(...food) {
        console.log(food.length)
    }

    count("Burgers", "Fries", null);

