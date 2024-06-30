// singleton
// object.create 

// objevct literals
const mySym = Symbol("key1")

const Juser = {
    name: "veda",
    "fullName": "uv",
    [mySym]:  "mykey1", 
    age:20,
    location: "tirupati",
    email: "xyz@gamil.com",
    isloggedIn: false,
    lastLoginDays: ["tuesday", "wednesday"]
}

// console.log(Juser.email)
// console.log(Juser["email"])
// console.log(Juser["fullName"])
// console.log(typeof Juser[mySym])

Juser.email = "abc@gmail.com"
// Object.freeze(Juser)
Juser.email = "abc@abc.com"
// console.log(Juser)

Juser.greeting = function(){
    console.log("hello evryone")
}

Juser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}


console.log(Juser.greeting())
console.log(Juser.greeting2())





