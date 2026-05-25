const accountId=144553
let accountEmail="yash@gmail.com"
var accountPassword="12345"//scope problem in js 
accountCity="Jaipur"//possible but not prefered
let accountState;//; doestnt matter
// accountId=2// not allowed
accountEmail="hc@gmail.com"
accountPassword="121212"
accountCity="Delhi"
console.log(accountId);//; doesnt matter
/*
Prefer not to use var becoz of 
issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
