// if 
// < > <= >= == != ===

// for loops

// for
// for of
// for in
// for each

// for with array
const array = [1,2,3,4,5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
    
}
// for with string
const str = "hello world";
for (let index = 0; index < str.length; index++) {
    // console.log(str[index]);
}

// for of with array
const array_of = [5,6,7,8,9];
for (const val of array_of) {
    // console.log(val);
}

// for of with string
const str_of = "hello world";
for (const val of str_of) {
    // console.log(val);
}

// for of with map
let map = new Map();
map.set('In', 'India')
map.set('US', 'United Kindom')
map.set('Fr', 'France')
for (const [key,val] of map) {
    // console.log(`${key} : ${val}`);
}

// for in with array
const array_in = ['a','b','c','d','f'];
for (const key in array_in) {
    // console.log(key); // return index of array
    // console.log(array_in[key]); // retrun val of array
}

// for in with string

const string_in = "hello world";
for (const key in string_in) {
//    console.log(key);
//    console.log(string_in[key]);
   
}
// for in with object
const myobject ={
    js:'javascript',
    cpp:'c++',
    js:'javascript',
} 
for (const key in myobject) {
    // console.log(key);
    // console.log(myobject[key]);
}

// for in map 
const map_in = new Map();

map_in.set('A','Aa')
map_in.set('B','Bb')
map_in.set('c','Cc')
console.log(map_in);

for (const [key, val] in map_in) {
    console.log(key);
    console.log(val);
    
}