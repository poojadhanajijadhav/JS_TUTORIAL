// foreach

const coding = ['c','c++','js','java','python','ruby'];


// call back funtion in foreach
coding.forEach(function (item){
    // console.log(item);
})

// arrow call back function in foreach
coding.forEach( (item) => {
// console.log(item);

})

// In foreach funtion call 
function printme(item){
    // console.log(item);
    
}
// coding.forEach(printme)

coding.forEach( (item, index, arr) => {
// console.log(item, index, arr);
})

// array of object with foreach

const arr_obj =[
    {   
        fname:"pooja",
        lname:"patil"
    },
    {   
        fname:"anant",
        lname:"patil"
    },
    { 
        fname:"anmay",
        lname:"patil"
    },
]

arr_obj.forEach( (item, index, arr) => {
    console.log(item.fname);
    console.log(item.lname);
    
})