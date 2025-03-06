 const marvel_heros = ["thor","irman","spiderman"];
 const dc_heros =["superman","flash", "batman"];

//  marvel_heros.push(dc_heros)

//  console.log(marvel_heros);
//  console.log(marvel_heros[3][1]);

//  const all_heros = marvel_heros.concat(dc_heros)
//   console.log(all_heros);

const all_new_here = [...marvel_heros, ...dc_heros]
console.log(all_new_here);


const arr1 = [1,2,3, [4,5,6],7,[6,7,[4,5]]]
const arr2 = arr1.flat(Infinity)
console.log(arr2); //[1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

console.log(Array.isArray("pooja")); // false
console.log(Array.from("pooja")); //[ 'p', 'o', 'o', 'j', 'a' ]
console.log(Array.from({name:"pooja"})); // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
