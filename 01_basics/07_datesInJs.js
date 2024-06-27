// Dates

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreateddate = new Date(2023,0,23) // Months start from 0
// console.log(myCreateddate.toDateString())
// console.log(myCreateddate.toLocaleString())

let otherdate = new Date("2023-02-14")
let otherdate2 = new Date("01-13-2023")
// console.log(otherdate.toLocaleString())
// console.log(otherdate2.toLocaleString())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDAte.getDay()} and time , string interpolation

newDate.toLocaleString('dafault', {
    weekday:"long"
})