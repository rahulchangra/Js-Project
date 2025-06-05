const arr = [1,2,3,4,5,6]

for (const val of arr) {
    console.log(val)
}

const greetings = "hello dosto mera name rahul hai!"

for (const greet of greetings) {
    console.log(`each character is ${greet}`)
}


//maps 

const map = new Map()
map.set('IND',"INDIA")
map.set('US',"AMERICA")

//console.log(map)

for (const [key,value] of map) {
    console.log(key)
}


// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'BGMI'
// }

// for (const value of myObject) {
//     console.log(value)// object is not iterable........
// }


const myObject2 = {
    js: 'javascript',
    cpp : 'C++',
    swift : 'swift by apple'
}

for (const key in myObject2) {
    console.log(key)// for printing the key
}

for (const key in myObject2) {
    console.log(myObject2[key])//for printing value of the key
}


const coding = ["js","c++","java","python"]

coding.forEach( function (item) {
    console.log(item);
    
})//simple method to apply loop in array


function printme(item){
    console.log(item);
}

coding.forEach(printme) // another simple method


coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
    
})


const myCoding = [
    {
        laguageName : "javascript",
        languageFileName : "js"
    },

    
    {
        laguageName : "python",
        languageFileName : "py"
    },

    
    {
        laguageName : "java",
        languageFileName : "java"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.laguageName);
    console.log(item.languageFileName);
} )

const values = coding.forEach( (item)=> {
    console.log(item);
    
} )

console.log(values);


const myNums = [1,2,3,4,5,6,7]

const newNums = myNums.filter( (num) => num > 5 )

console.log(newNums);


const newNums1 = myNums.filter( (num) => {
    return num > 4
} )
 

console.log(newNums1);


const books = [
    {
      name: "The Hobbit",
      genre: "Fantasy",
      published: 1937,
      edition: 2001
    },
    {
      name: "To Kill a Mockingbird",
      genre: "Fiction",
      published: 1960,
      edition: 2015
    },
    {
      name: "1984",
      genre: "Dystopian",
      published: 1949,
      edition: 2021
    },
    {
      name: "The Great Gatsby",
      genre: "Classic",
      published: 1925,
      edition: 2013
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      published: 1997,
      edition: 2014
    },
    {
      name: "The Alchemist",
      genre: "Adventure",
      published: 1988,
      edition: 2006
    },
    {
      name: "Sapiens: A Brief History of Humankind",
      genre: "Non-fiction",
      published: 2011,
      edition: 2020
    },
    {
      name: "Pride and Prejudice",
      genre: "Romance",
      published: 1813,
      edition: 2012
    }
  ];

  
  const userbooks = books.filter( (bk) => bk.genre === "Fantasy" )
  
  console.log(userbooks);
  

  const userbooks1 = books.filter( (bk) => bk.edition >= 2015 && bk.genre === 'Fiction')

  console.log(userbooks1);
  
  


