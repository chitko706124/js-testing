// NAME 
// 1 = conditional statement
// 2 = control structure
// 3 = flow control || control flow

// if(false){
//    console.log("a")
//    console.log("b") 
//    console.log("c") 
// }else{
//     console.log("this is false")
// }


function canICome(wakeUpTime){
    //မနက် ၉ နာရီကျောင်းတက်ပါတယ်
    // ၉ နာရီမတိုင်လာရင်ကျောင်းတက်ရ
    // ၉ နာရီကျော်လာရင် ကျောင်းမဝင်ရ

    let result;

    if(wakeUpTime <= 9){
        result ="အတန်းထဲဝင်ပါ";
    }else{
        result = "အတန်းထဲမဝင်ပါနဲ့";
    }

    // if(wakeUpTime <= 9) { 
    //     return "အတန်းထဲဝင်ပါ";
    // }
    //     return "အတန်းထဲမဝင်ပါနဲ့";
}

console.log(canICome(9))
console.log(canICome(8.5))
console.log(canICome(10))
console.log(canICome(15))




let marks = 39.9;

if(marks >= 80){
    console.log("Distation")
}else if(marks >= 40){
    console.log("pass")
}else if(marks < 40){
    console.log("Fail")
}