// const coding = ['c','c++','js','java','python','ruby'];
// const value = coding.forEach((item) => {
//     return item
    
// });
// console.log(value);

const my_num = [1,2,3,4,5,6,7,8,9,10];
//1
const new_num = my_num.filter((num) => num >=5)
// console.log(new_num);

//2
const num1 = my_num.filter( (num) => {
    return num > 5
})
// console.log(num1);

//3
const newNum = []
my_num.forEach( (num) =>{
    if(num > 5){
        newNum.push(num); 
    }
})
// console.log(newNum);

// array of object
const book =[
    {
        title: "book1",
        genre: "marathi",
        publish: "1989",
        edition: "fifth",
    },
    {
        title: "book2",
        genre: "hindi",
        publish: "1999",
        edition: "first",
    },
    {
        title: "book3",
        genre: "english",
        publish: "2001",
        edition: "second",
    },
    {
        title: "book4",
        genre: "france",
        publish: "2007",
        edition: "sixth",
    },

];

// const newBook = book.filter( (bk) => bk.genre == 'hindi')
// const newBook = book.filter( (bk) => bk.publish < 2007)
const newBook = book.filter( (bk) => {
    return bk.edition == 'sixth'
})
console.log(newBook);

