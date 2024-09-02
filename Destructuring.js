console.log("this is Destructuring")

let a,b ;
// [a,b] = ["apple" , "mango"];   //its a unique way to defind the veluse
// console.log(a,b);


// Destructuring with Array

// [a,b,...c] = [1,2,3,4,5,67,8,9,10]
// console.log(a,b,c);

// const food = ['carret' , 'bringle' , 'temato'];
// [a,b] = food;
// console.log(a,c);


// Destructuring with Object
({a,b,...c} = {a:12, b:13,c:"kreet", d : true , f : "mayavi"})
console.log(a,b,c);

let emp = {
    name : 'kreet', age : 12, type : 'programmer', next : function() {
    return `functin ${this.name}`
    }
}

let {name , type , ...age} = emp;
console.log(name , type ,age );
let n = emp.next();
console.log(n);






