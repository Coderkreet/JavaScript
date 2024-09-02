console.log("totureal Loop");

let arr = [1, "lol", 42, 56, 75, 90];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);           // NOrmal way of Loop
// }


arr.forEach(function (element) {
    //  Adevance  way  of loop
    // console.log(element)
});


// Object 

let obj = {
//  key :  obj[key]
    name: "Kreet",  // in this side name is Key and inside there this is Obj[key]
    age: 12,
    package: "1.5 coror",
    type: "programmer"
}

// @@@@@@@@@@@@@for in loop@@@@@@@@@@@

// for(let key in obj){

// console.log( key ,"", obj[key]);

// }


// !!!!!!!!!!!!!!1forEach LOOP!!!!!!!!!!!!!!!!!

// Object.keys(obj).forEach(key => {

//     console.log(key, obj[key]);

// });


//**********For Of LOOP***************

for(let key of arr){

console.log(key);


}