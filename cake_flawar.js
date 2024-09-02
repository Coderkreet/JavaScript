let cake = {

    cakeName: "Redvelvet",
    cakeColor: 'red'
}

let flawar = {
    flawarname: "Rose",
    __proto__: cake

}
let Food = {
    FoodName: "Carret",
    __proto__: flawar
}
// console.log(Food);


// const arry = ['kreet'];
// arry.push("gonglit")
// console.log(arry);  


// const object =  new Object();    //Chack prototype in Objest
// console.log(object);
// const array =  new Array();       // Chack prototype in array
// console.log(array);


// Creat Prototype

Array.prototype.kreet  = function () {
return this;
}
const loc = ['Sausar'];
console.log(loc.kreet());

Array.prototype.ConverinObj = function () {
    
let NewObj = {};
this.forEach(element =>{
NewObj[element] = element;
})
return NewObj;
}

console.log(loc.ConverinObj());

function Myproto(name , cakename){
this.name = name ;
this.cake = cakename;
}
Myproto.prototype = Food;

const myproto = new Myproto("akshta" , "vanela")

console.log(myproto.FoodName);



