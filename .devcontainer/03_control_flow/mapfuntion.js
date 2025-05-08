const my_num = [1,2,3,4,5,6,7,8,9,10];

//1
// console.log( my_num.map((num) => num+10));
//2
const newNum =  my_num.map((num) => {
    return num+10
})
// console.log(newNum);

//3
const newNum1 =  my_num.map((num) => {
    return num+20;
})
// console.log(newNum1);

// chaining
const newNum3 =  my_num
                    .map((num) => num * 10)
                    .map(num => num + 1)
                    .filter(num => num > 50)
                    .map(num => num-1)
console.log(newNum3);


