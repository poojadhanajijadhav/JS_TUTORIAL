const tinderUser = new Object(); //singaltone object
// const tinderUser = {} //non singaltone object

tinderUser.id = "123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"summy#gmail.com",
    fullname:{
        userfullname:{
            firstname: "pooja",
            lastname: "patil"
        }
    }
}


// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}

// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)
console.log(Object.assign({}, obj1, obj2));

const obj4 = {...obj1,...obj2}
console.log(obj4);

const users = [
    {
        id: 1,
        gmail: "pooja@gmail.com"
    },
    {
         id: 2,
        gmail: "anmay@gmail.com"
    }
]
// console.log(Object.keys(users[0]));
// console.log(Object.values(users));
// console.log(Object.entries(users));
// console.log(regularUser.hasOwnProperty("gmail"));

// object destructuring


const course = {
    coursename:"JS in hindi",
    price: "999",
    courseinstructor:"pooja",
}
// const {courseinstructor} = course
// console.log(courseinstructor);

const {courseinstructor: instructor} = course
console.log(instructor);

// JS API

// json data format below

// {
//     "name": "pooja",
//     "coursename": "JS in hindi",
//     "price": "free",
// }

