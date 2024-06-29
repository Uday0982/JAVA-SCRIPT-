// array

// array in JS is re - sizable 
// creates shallow copies

const myArr = [0,1,2,3,4]
// console.log(myArr[0])

const myHeros = ["Hulk","wanda"]
const myArr2 = new Array(5,4,3,2,1)

// Array menthods

myArr.push(5)
myArr.push(6)
myArr.pop()

myArr.unshift(9)   // adds infront
myArr.shift()     // removes that has been unshifted


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join() // adds all elements to a string
// console.log(myArr)
// console.log(typeof newArr)

// slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)

const myn2 = myArr.splice(1,3)
console.log("B", myArr)
console.log(myn2)






