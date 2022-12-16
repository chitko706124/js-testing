// for( let i= 1; i<= 5; i++) {
//     if(i === 3) continue ;
//     console.log(i,"========")

// }

// const letters = ["a","b","c","d","e","f"]

// for (let i = 0; i<letters.length ; i++ ){  
//     console.log("index" , i , "--",letters[i])  
// }

// const marks = [54,60,96,45,80,72] ; 
// let totalMark = 0;

// for (let mark = 0; mark < marks.length; mark++){
//     console.log(marks[mark]);
//     totalMark += marks[mark];
// }

// console.log("Total : ",totalMark)

// (question)
// totalMark
// win or lose


// const mgmgInfo = {

//     name : "mgmg",
//     age : 18,
//     mark : [
//         {
//             id : 1,
//             subject : "Myanmar",
//             mark : 56,
//         },
//         {
//             id : 2,
//             subject : "English",
//             mark : 70,
//         },
//         {
//             id : 3,
//             subject : "Math",
//             mark : 96
//         },
//         {
//             id : 4,
//             subject : "Chem",
//             mark : 85
//         },  
//         {
//             id : 5,
//             subject : "Phy",
//             mark : 90
//         },  
//         {
//             id : 6,
//             subject : "Bio",
//             mark : 75
//         },
//     ]
// }

// //အချက်လက်တွေထက်ထည့်တာ
// mgmgInfo.totalMark = 0;
// mgmgInfo.results = {};

// for (let i=0;i<mgmgInfo.mark.length;i++){
//     console.log(mgmgInfo.mark[i].mark);
//     //total mark ရှာတာ
//     mgmgInfo.totalMark += mgmgInfo.mark[i].mark;
//     // pass or fail စစ်တာ   
//     mgmgInfo.results [mgmgInfo.mark[i].subject] = mgmgInfo.mark[i].mark >=40 ? "pass" : "fail"
// }

// console.log(mgmgInfo)
// console.log(mgmgInfo.mark[3].mark)

// function starGenerator(count,element="* "){
//     let star = "";
//     for(let i=1;i<=count;i++){
//         star += element;
//     }
//     return star;
// }
// // console.log(starGenerator(4))


// // half pyramid
// for (let i=1;i<=6;i++){
//     console.log(starGenerator(i,"* "))
// }


// for (let i=6;i>=1;i--){
//     console.log(starGenerator(i,"= "))
// }

///////////

// for (let i=1;i<=6;i++){
//     // console.log(starGenerator(i,i%2 === 0 ? "= " : "* "))

//     if(i%2 === 0){
//         console.log(starGenerator(i,"= "))
//     }else{
//         console.log(starGenerator(i,"* "))
//     }
// }



// for(let i=1;i<=5;i++){
//     let star=""
//     for(let x=1;x<=5;x++){
//         star+="* "
//     }
//     console.log(star,i)
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
for(let i=0;i<ratings.length;i++){
    let result="";
    for(let x=1;x<=5;x++){
        if(x <= ratings[i].rate){
            result += "* "
        }else{
            result += "- "
        }
    }
    console.log(result,ratings[i].name)
}