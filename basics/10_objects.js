const tinderUser = new Object()//singleton object

const tinderUser1 = {} // non singleton object

tinderUser1.id = "123abc"
tinderUser1.name = "Rahul"
tinderUser1.isLoggedIn = false

//console.log(tinderUser1)

const RegularUser = {
    email: "changrarahul55@gmail.com",
    fullname: {
        userFullname: {
            firstname: "Rahul",
            lastname: "changra"
        }
    }
}

console.log(RegularUser.fullname.userFullname.firstname);

const obj1 = {1:"a" , 2: "b"}
const obj2 = {3:"c" , 4: "d"}

//const obj3 = {obj1 , obj2}

//const obj3 = Object.assign({},obj1 , obj2)// adding two objects with each other

const obj3 = {...obj1, ...obj2}//by spreading all the values

console.log(obj3)


const users = [
    {
        id: 1,
        email: "changrarahul"
    }
]

users.email
console.log(tinderUser1)

console.log(Object.keys(tinderUser1))//to get all the keys of the object
console.log(Object.values(tinderUser1))
console.log(Object.entries(tinderUser1))//first property would be key and 2nd would be their value

 console.log(tinderUser1.hasOwnProperty('name')) // to check whether this property exists in that object or not
 