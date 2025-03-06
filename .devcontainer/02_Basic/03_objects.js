/* two way object decleartion
1. literal
2. constructor (Object.create)

note: singletone => object declared using constructor then it will become singletone
*/
// literal object
const mySymbol = Symbol("key1")
const JsUser = {
    name: "pooja", 
    [mySymbol]:"mysymbol1",
    "full name": "Pooja Patil",
    age: 30,
    location: "pune",
    gmail: "pooja@google.com",
    islogged: false,
    lastLoginDays:["Monday", "Tuesday", "saturday"]
}
const mySym = Symbol("key2")
JsUser[mySym]= "mySym1"

console.log(JsUser.gmail);
console.log(JsUser["full name"]);
console.log(JsUser["gmail"]);
console.log(typeof JsUser[mySym]);
console.log(JsUser[mySym]);
console.log(JsUser[mySymbol]);

JsUser.name = "anmay"
console.log(JsUser);
// Object.freeze(JsUser)
JsUser.name = "anant"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.age}`);
    
}
console.log(JsUser);
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greeting2());






