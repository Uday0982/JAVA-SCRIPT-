const heros=["alice", "ironman", "suraj", "mahi"]
const heroin=["elsa","anna","olaf"]

//heros.push(heroin)

// console.log(heros)
// console.log(heros[4][1])

//heros.concat(heroin)
// const allheros = heros.concat(heroin)
// console.log(allheros)

const all_new_heros = [...heros, ...heroin]
// console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)

// console.log(real_array)

console.log(Array.isArray("uday"))
console.log(Array.from("uday")) // converts to array
console.log(Array.from({name: "jeevi"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))



