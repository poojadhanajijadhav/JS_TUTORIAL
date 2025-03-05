// Primitive total 7 types
// String, Number, Boolean, null, undefined, Symbol, BigInt 

const score =300;
const scorevalue = 300.5;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); //false


const bigNumber = 1234567834567;

// above line js use BitInt datatype


// Is JS dynamic or static type language??
// Ans --> JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime.


// Reference (Non primitive)
Array, Object, Function

//Array
const hero = ["shankiman", "naagraj", "doga"]
let myarr = [1,2,3,4]
//Object
let myObj = {
    name:"pooja",
    age:"30",
}

// Function
function test(){
    
}

//you can store function in variable

const MyFuntion = function(){
    console.log("Hello World");
}

console.log(typeof MyFuntion); // function
console.log(typeof myObj); // object
console.log(typeof hero); // object
console.log(typeof myarr); // object

//***********************************************************

//memary type
// 1. stack --> primitive --> String, Number, Boolean, null, undfined
// 2. heap  --> non primitive  --> object, array, function

let myName ="pooja123"
let anontherName = myName
anontherName = "anamy";
console.log(myName);
console.log(anontherName);

let userOne = {
    email :"pooja@gmail.com",
    upi : "9527390607aupi@aixs"
}

let anotheruser = userOne

anotheruser.email = "anmay@gmail.com";

console.log(anotheruser);
console.log(userOne);
