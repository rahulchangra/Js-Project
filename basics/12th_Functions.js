function addTwoNumbers(number1, number2){ //function declaration
    return number1+ number2
}

const result = addTwoNumbers(3,6)
//console.log(result)

function loginUserMessage(username){
    if (!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


function calculateCartPrice(...num1){ // ... - rest operator 
     return num1
}

console.log(calculateCartPrice(200,400,500))

const user = {
    username: "rahul",
    price: 2500
}

function handledObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handledObject(user)

const mynewArray = [200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(mynewArray))

console.log(returnSecondValue([200,300,400]))
