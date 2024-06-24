//primitive and non-primitive ( based on how data is stored in memory and how u can access the data  )

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const out = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id=== anotherId)
 
const bigNumber = 345672763862576734n 



// Reference Type ( Non-Primitive )

// Array, Objects, Functions

const heros = ["captain", "hawkeye", "ironamn"]
let myObj = {
    name: "uday",
    age: 24
}

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof bigNumber);
console.log(typeof out);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof id);