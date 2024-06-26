const name="veda"
const count=50

//console.log(name + count + "hello")

console.log(`hello my name is ${name}.And my count is ${count}`)
// String Interpolation^

const gameName= new String('udaya-v')

console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'))

const newString = gameName.substring(0,3);
console.log(newString)

const new2 = gameName.slice(-4,5)
console.log(new2);

const new3 = "     hitesh     "
console.log(new3)
console.log(new3.trim())  // removes spaces

const url = "https://uday.com/udayday%30ayy"
console.log(url.replace('%30','_'))   //replaces

console.log(url.includes('mahi')) //gives boolean result based on the value present or not

console.log(gameName.split('-'))





