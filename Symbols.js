console.log("Symbol in js ");

const k1 = Symbol("for my unique name")
const k2 = Symbol("for my local name ")

// console.log(k1 === k2);

let myObj = {};

myObj[k1] = "kreet";
myObj[k2] = "Krunal";
myObj.name = "bala";
console.log(myObj);
// console.log(myObj[k1]);
// console.log(myObj[k2]);


// for(let key in myObj){

// console.log(key , myObj[key] );

// }


