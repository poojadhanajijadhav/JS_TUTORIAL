


const myNum = [1,2,3]
// const num = myNum.reduce((ac,cv) => {
//     console.log(ac,cv);
//     return ac+cv
// },0)

const num = myNum.reduce((ac,cv) => ac+cv,0)
console.log(num);

const shoppingcard = [
    {
        itemName: 'JS',
        price: 2999
    },
    {
        itemName: 'Python',
        price: 5999
    },
    {
        itemName: 'Java',
        price: 7999
    },{
        itemName: 'ReactJS',
        price: 10999
    },
]

const shop = shoppingcard.reduce((acc, item) => acc+item.price,0)
console.log(shop);
