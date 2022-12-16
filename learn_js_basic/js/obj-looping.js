
// const fruits =  ["apple","orange","mango","banana","grape","lemon","coconet"];

//  for (let i=0; i<fruits.length;i++){
//     console.log(i,fruits[i])
//  }

// for (fruit of fruits){
//     console.log(fruit)
// }

// for (index in fruits){
//     console.log(index,fruits[index])
// }

// const mgmginfo = {
//     name : "Mg Mg",
//     age : 18,
//     job : "student"    
// }

// for (key in mgmginfo){
//     console.log(key,mgmginfo[key])
// }

const ratings =[
    {
        id : 1,
        name : "Mg Mg",
        rate : 3,
    },
    {
        id : 2,
        name : "Kyaw Kyaw",
        rate : 5,
    },  
    {
        id : 3,
        name : "Hla Hla",
        rate : 1,
    },   
    {
        id : 4,
        name : "Mya Mya",
        rate : 2,
    },   
    {
        id : 5,
        name : "Ko KO",
        rate : 4,
    },
    {
        id : 6,
        name : "Ko Myo",
        rate : 6,
    },
]

for(rating of ratings){
    for(key in rating){
        console.log(key,rating[key])
    }
    console.log("- - - - - ")
}