console.log("this is map tutorial");

let myMap = new Map();

const key1 = {

    name : "kreet",
    langauge : "go",
    Array : ["papa" , "mammy"]
}

const key2 = "My sister will come foem delhi";
const key3 = function () {
return `i am function` ;
}

myMap.set(key1 , {name : "love"})
myMap.set(key2 , "this is string")
myMap.set(key3 , "this is function")

// console.log(myMap);
// let getMap1 = key1;
// let b = getMap1;
// let getMap2 = myMap.keys(key2)
// console.log(b);

// for(let [key , value] of myMap){
// console.log(value);
// console.log(key);
// }

// Get the velue of Map 
// for(let value of myMap.values()){
// console.log("the key is" , value);
// }
// Get the key  of  map
// for(let key of myMap.keys()){
// console.log("the key is" , key);
// }

// myMap.forEach((Value , key)=> {
// console.log("Key is " ,key)    
// console.log("value is " ,Value)    
// });

let arryinMap = Array.from(myMap);
console.log(arryinMap);


