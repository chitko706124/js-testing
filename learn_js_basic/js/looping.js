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


const mgmgInfo = {
    name : "mgmg",
    age : 18,
    mark : [
        {
            id : 1,
            subject : "Myanmar",
            mark : 56,
        },
        {
            id : 2,
            subject : "English",
            mark : 70,
        },
        {
            id : 3,
            subject : "Math",
            mark : 96
        },
        {
            id : 4,
            subject : "Chem",
            mark : 85
        },  
        {
            id : 5,
            subject : "Phy",
            mark : 90
        },  
        {
            id : 6,
            subject : "Bio",
            mark : 75
        },
    ]
}

mgmgInfo.totalMark = 0;
mgmgInfo.results = {};

for (let i=0;i<mgmgInfo.mark.length;i++){
    console.log(mgmgInfo.mark[i].mark);
    mgmgInfo.totalMark += mgmgInfo.mark[i].mark;
    mgmgInfo.results [mgmgInfo.mark[i].subject] = mgmgInfo.mark[i].mark >=40 ? "pass" : "fail"
}

console.log(mgmgInfo)
// console.log(mgmgInfo.mark[3].mark)