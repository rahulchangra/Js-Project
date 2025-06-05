//singleton  -  a single instance of a class
// objects literals

Object.create//contructor method which is called singleton
const  Sym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    age: 18,

    "fullName": "Rahul changra",
    location: "hamirpur",
    isLoggedin: false,
    [Sym]: "key1",//for declaring symbol
    lastLogginDays: ["monday","sunday"]

}

console.log(JsUser.name)

console.log(JsUser["name"])
console.log(JsUser["fullName"])
console.log(JsUser[Sym])


JsUser.name = "Rahul changra"
console.log(JsUser["name"])
//Object.freeze(JsUser)// to freeze the object

JsUser.name = "Rahul changra bhai"
console.log(JsUser["name"])

myArray = ["h","i"]


JsUser.greeting = function(){
    console.log("hello dosto")
}
console.log(JsUser.greeting)//function does not executed but i only get the reference of the function

JsUser.greeting2 = function(){
    console.log(`hello dosto, ${this.name}`)
}

console.log(JsUser.greeting2())