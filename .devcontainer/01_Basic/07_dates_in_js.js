//Dates


let myDate = new Date();
console.log(myDate) // 2025-03-05T19:53:27.144Z
console.log(myDate.toString()) // Wed Mar 05 2025 19:54:54 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) // Wed Mar 05 2025
console.log(myDate.toISOString()) // 2025-03-05T19:54:54.057Z
console.log(myDate.toJSON()) // 2025-03-05T19:54:54.057Z
console.log(myDate.toLocaleString()) // 3/5/2025, 7:54:54 PM
console.log(typeof myDate) // object

let myCreateDate = new Date(2025, 0,12,5,3);
console.log(myCreateDate.toLocaleString())

let myCreateDate1 = new Date("11-1-2025");
console.log(myCreateDate1.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(typeof myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))





