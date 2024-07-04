// const tinderUser = new Object()   this is a singleton object
const tinderUser = {}

tinderUser.id = "abc"
tinderUser.name = "arjun"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"xyz@.com",
    fullname: {
        userfullname:{
        firstname:"uuu",
        lastname:"vvv"
        }
    }

}

// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname)
// console.log(regularUser.fullname.userfullname.lastname)

const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"a", 4:"b"}
const obj4 ={5:"a", 6:"b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({},obj1,obj2,obj4)  // the forst object is target and the rest are sources , so itll copy all the sources to the target object
// console.log(obj3)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)



const users = [
    {
        id:1,
        email:"sammmmm"
    },
    {
        id:1,
        email:"sammmmm"
    },
    {
        id:1,
        email:"sammmmm"
    }
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged'))

const course = {
    coursename : " Js in Hindi",
    price: "99",
    courseInstructor:"uday"

}
// objecr de-structuring
// course.courseInstructor

// const { courseInstructor }= course
const { courseInstructor: instructor }= course // u can name it as instructor too coz its too long

// console.log(courseInstructor)
console.log(instructor)

// {
//    "name":"uday",
//     "coursename": "js in hindi",
//     "price":"free"
// }

[
    {},
    {},
    {}
]

