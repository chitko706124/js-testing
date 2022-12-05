// function morning(wakeUpTime){

//     let results;
//     if(wakeUpTime <= 7){
//         results = "အရိုက်မခံရပါ";
//     }else{
//         results = "အရိုက်ခံရမယ်"
//     }
//     // if(wakeUpTime >= 8){
//     //     return "အရိုက်မခံရပါ"
//     // }else{
//     //     return "အရိုက်ခံရမယ်"
//     // }
// }

// console.log(morning(10))



// function canICome(wakeUpTime){

//     let result;

//     if(wakeUpTime <= 9){
//         result ="အတန်းထဲဝင်ပါ";
//     }else{
//         result = "အတန်းထဲမဝင်ပါနဲ့";
//     }
// }
// console.log(canICome(10))
// console.log(canICome(9))

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