const mySelf = {

    //property
    name : "Chit Ko Ko",
    age : 18,
    isSingle : true,

    // method
    teach : function(what,where){
        return this.name+"can teach " + what + " at " +where ;
    },

    //ES6 above 
    learn(anything="anything"){
        return `${this.name} can learn ${this.anything}`;

    },

    showThis : function(){
        console.log(this.name,this.age,this.learn("backend"))
    }
}

// console.log(mySelf.teach("Frontend Development","MMS IT"))
// console.log(mySelf.learn("Backend too"))

console.log(mySelf.showThis())

