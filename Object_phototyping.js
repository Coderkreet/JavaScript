console.log("object_phototyping")

// let obj = {

// name : "code with kreet",
// code : "javascript"

// }
// console.log(obj);


// let obj2 = function (Getname) {
//     this.name = Getname;

// }

// obj2.prototype.Getname = function () {
//     return this.name;
// }
// obj2.prototype.setname = function (newanme) {
//     this.name = newanme;

// }

// let nm = new obj2('rohandaas');
// console.log(nm);



let Obj = function (name ) {
    this.myname = name;
   
}


Obj.prototype.myname = function (){
   return this.myname;
}

Obj.prototype.getname = function (name){
 this.myname = name;
}

let myObj = new Obj( "kreet")
console.log(myObj);


