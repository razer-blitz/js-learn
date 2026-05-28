let score="33abc"

console.log(typeof (score));
console.log(typeof score);

let valueInNumber=Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//NaN for 33abc and undefined;in case of null op =0;true=>1

//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0
let a=Boolean(undefined)
console.log(a)
//1,2...,"yash"=>true in boolean convrsion
//null,undefined,0,""=>false

// *************** Operations ****************
let value= 3
let negValue=-value
//operations in console possible, +,-,*,**(for pow eg 2**3),/,%
let str1="hello"
let str2=" yash"
let str3=str1+str2
//+true=1,+""=0,true+=error,"1"+2=1+"2"=12,"1"+2+2=122,1+2+"2"=32,
// 
//operation precidence
//

