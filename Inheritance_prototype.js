console.log("this is prototype in inheritance");
let proto = {

slogam : function () {
    
    return "this is best";

}
,
changeanme : function (newname) {  
    this.name = newname
}
}

// THIS CREAT KREET OBJ
let kreet = Object.create(proto);
kreet.name = "krunal";
kreet.role = "programmer";
kreet.changeanme("rohan");
console.log(kreet);
                                                            //DIFFRENT LOGIC SAME WORK

//THIS ALSO CREATE BARRY OBJ
const barry = Object.create(proto,{
name : {value: "hari" , writable : true}  ,  
roli : {value: "roli"}    
})
barry.changeanme("krunal");
barry.slogam()
console.log(barry);
  


// EMPLOYEE CONST
function employee(name , salary , experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;

}

// slogan
employee.prototype.slogam = function () {
    return "this company is best regard " + this.name;
}

let hary = new employee("harry" , 30,000, 1);

console.log(hary.slogam());

//new programar
function programmer(name, salary , experience , langauge) {
employee.call(this, name,salary,experience);
this.langauge = langauge;
}
// inharit the proto

programmer.prototype = Object.create(employee.prototype);

//set const
programmer.prototype.constrouctor = programmer;

let kunal = new programmer("rohan" , 300 , 1 , "js")
console.log(kunal);


