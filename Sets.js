console.log("this is sets");

let mySet = new Set();

mySet.add("love")
mySet.add("papa")
mySet.add("dada")
mySet.add("aaji")
mySet.add("baba")

// console.log(mySet);
// console.log(mySet.has('love'));       // has is check your value is present in sets or not 
// mySet.delete('love');             // delete the element in sets 
// mySet.clear('love');             // clear all element in the sets 

// for(let item of mySet){
                                // itrate sets 
//     console.log(item);
// }


let arr = ['apple' , 'banana' , 'kela' , 'kela']
console.log(arr);

let mySet2 = new Set(arr)
console.log(mySet2);



let myArr = Array.from(mySet2);    // sets converting in array 
console.log(myArr);