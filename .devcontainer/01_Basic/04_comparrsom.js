// console.log(2 > 1); //true
// console.log(2 >= 1); //true
// console.log(2 < 1); //false
// console.log(2 == 1); //false
// console.log(2 != 1); //true

// if we compare two different datatype value then issue occured

//console.log("2" > 1); //true --> auto convert str to number
//console.log("02" > 1); //true --> auto convert str to number

// But some time not give preditable result


console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true --> here js convert null to 0 ---> un preditable result

// null may convert NaN or 0 its not predictable


console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//stric check ===   ---> check datatype

console.log(undefined === 0); //false
console.log(0 === 0); //true







