const accountId = 144553
let accountEmail = 'pooja19061994.com'
var accountPassword = '123456'
accountCity = 'Pune'


// accountId = 2 // not allowed beacuse 

/*
prefer not to use var beacuse of issue in log scope and function scope
*/

accountEmail = 'ac.com'
accountPassword = '2323232'
accountCity = 'mumbai'

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity]);
