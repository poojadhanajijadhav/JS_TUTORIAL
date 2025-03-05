const name ="Pooja";
const MyProjectCount = 10

console.log(name+MyProjectCount+" value");

const gameName = new String("Pooja");

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-8,2);
console.log(anotherString);
const trimString = '        poooja       ';
console.log(trimString.trim());

const url = 'abc@gmail.com';
console.log(url.replace('com','in'));
console.log(url.includes('gmail'));