const user = { // created a object user
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
        
    }   
}

//This refer to current context....

//   user.welcomeMessage()

//   user.username = "Rahul"
//   user.welcomeMessage()


//console.log(this)


// ---- This only works inside the object not inside the function
// function chai() {
//     let username = "Rahul"
//     console.log(this.username);
// }

//chai()


const chai = () => {
    let username = "Rahul"
    console.log(username);
}

chai()

// --->> Basically this fucntion is used for objects methods and arrow function is basically suitable for short functions

// syntax of arrow function 

// const adtwo = (num1,num2) => {
//     return num1+num2
// }


//  -- IMPLICIT RETURN--
const adtwo = (num1,num2) => (num1+num2) // if you apply {} braces then you need to write return keyword otherwise if you applying parenthesis you not need to write return keyword

const addtwo = (num1,num2) => ({username: "Rahul"})

console.log(adtwo(2,3))
