

const fruits = {
    apple : 100,
    orange : 120,
    mango : 200,
    banana : 30,
}

let total = 0;

function tax(amount,taxRate = 5){
    return amount * (taxRate / 100) 
}

function buy(fruitName,quantity){
    let cost = quantity * fruits[fruitName];
    // let acutalCost = cost + tax(cost);
    total += cost;
    // return cost + " MMK";
    return `${fruitName} : ${quantity} = ${cost} MMK`
}

console.log(buy("apple",2))
console.log(buy("orange",5))
console.log(buy("mango",8))
console.log(buy("banana",30))

console.log("Total Cost : ",total," MMK")
console.log("Tax : ",tax(total)," MMK")
console.log("Net Total : ",total +tax(total) ," MMK")



// console.log(tax(100))