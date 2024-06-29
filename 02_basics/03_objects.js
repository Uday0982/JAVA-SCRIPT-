// singleton
// object.create 

// objevct literals
const mySym = Symbol("key1")

const Juser = {
    name: "veda",
    "fullName": "uv",
    [mySym]:  "mykey1", //symbol
    age:20,
    location: "tirupati",
    email: "xyz@gamil.com",
    isloggedIn: false,
    lastLoginDays: ["tuesday", "wednesday"]
}

console.log(Juser.email)
console.log(Juser["email"])
console.log(Juser["fullName"])
console.log(typeof Juser[mySym])

