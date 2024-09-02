// console.log("closer");
//❤️ ______________Closer_______________
// let kreet = function (a) {
// console.log("good morning " + a);

// let c = 12;
// return function (b) {

//     return a+b+c;
// }

// }

// let store = kreet(4);

// console.log(store(3));


// function preet(a,b,c){
// return {

// Addtwodegite() {
//     return a+b;

// },
// Addthreedegite() {
//     return a+b+c;

// }
// }
// }

// let store1 = preet(1,2,3);
// console.log(store1.Addtwodegite())
// console.log(store1.Addthreedegite())



// ❤️-----------Call Apply Bind--------------

// console.log('apply bund and call')

// let Employee = {
// name : 'kreet',
// post : 'software engineer',
// }

// let printdetailes = function (state , country) {
//     console.log(this.name,state, country);
// }
// let Employee2 = {
// name : 'krunal',
// post : 'full stack developer'
// }
// //call 
// printdetailes.call(Employee, "sausar" , 'india')  // call actual use 
// // apply
// printdetailes.apply(Employee2 , ["saoner",'india'])  // Apply (we can pass in argumant in array list ) 
// // Bind
// //like a call function  its make a copy function and use when you want
// let newfun = printdetailes.bind(Employee2,"linga" , "india" )
// console.log(newfun());

// ❤️0------Map Filter Reduse--------0 

let age = [12,1,2,3,44,63,12,7,75,32,12,89];

let company = [
    {name : "Kotlen",game : 'cerus', id : 11},
    {name : "java",game : 'cerus', id : 1},
    {name : "Advancejavascript",game : 'bors', id : 12}
]

// age.forEach(ele=>(console.log(ele)));
let Age = age.filter(age => age >=20)
// console.log(Age);                                //💪Filter

let comp = company.filter( id => id.game >='cerus')
// console.log(comp);

//  company.map(com =>console.log(com))           // Map👍


//   let sort_name = company.sort( (c1,c2) => {

// if (c1.id > c2.id) {            // > Asending Order    < desending order
//     return 1;
// }
// else{                                     //Sort 👍
//     return -1;
// }
//  })     
  let sort_name = company.sort( (c1,c2) =>(c1.name > c2.name)? 1 : -1 )            // > Asending Order    < desending order)     
  let sort_age = age.sort( (c1,c2) =>(c1 > c2)? 1 : -1 )            // > Asending Order    < desending order)     
//  console.log(sort_name);
//  console.log(sort_age);


//  Reduse 

let c = age.reduce((total,age) => {

return total +age;

},0)
// console.log(c);



//+++++++++++Curring+++++++++++++

function kreet() {
return function (b) {
return function (c) {
return b+c;                          // Lexical scop valriable
}                                   // closer
}
}

let k = kreet()(2)(9);
// console.log(k)

let userinfo = {

name : "kreet bende", age : 20
}

function User(value) {
return function (userval) {
return function (userid) {
return value[userid] + value[userval]
}
}
}
let b = User(userinfo)('name')('age');
// let d = b('name')('id');
console.log(b)