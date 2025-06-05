//stack memory and heap memory


//stack(primitive) - stores primitive data types and reference to objects in the heap memory
//heap(non primitive) - stores objects, arrays, functions, etc.

let user = {
    email : "changrarahul55@gmail.com",
    password : "12345678"
}

let user1 = user // user1 is a reference to the same object in the heap memory
user1.email = "khanduMania"
console.log(user)
