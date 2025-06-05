const { log } = require("node:console");

function one(){
    const userName = "Rahul"
    function two(){
        const website = "Youtube"
        //console.log(userName);
    }
    //console.log(website);

    two();
}

one()

if (true) {
    const userName = "gaurav"
    if (userName === "gaurav"){
        const website = " Google"
      //  console.log(userName+website);
    }
    //console.log(website);
}
//console.log(userName);



// ............INTERSTING...........


console.log(addone(5))
function addone(num) {
    return num + 1
}

addtwo(5)// cant access variable before declaration 
const addtwo = function(num){
    return num + 2
}

