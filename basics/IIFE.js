//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

(() => {4
    //simple IIFE with arrow fucntion
    console.log(`DB CONNECTED TWO ${name}`);
})('Rahul')