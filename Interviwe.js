// ({a,b,...c} = {a:12, b:13,c:"kreet", lai : true , karachi : "mayavi"})
// console.log(a,b,c);

// [a,...b] = [{name : 'kreet' , age : 12},{name : 'kreet' , age : 12},{name : 'kreet' , age : 12},{name : 'kreet' , age : 12}]
// console.log(a,b)

// ({c,d} = {c:12 , d:"kreet"});
// console.log(c,d);



let num  =  Math.ceil( 10*Math.random())
console.log(num);
let limit = 10;
while (limit > 0) {
let a = prompt("pike number 1 to 10")
if (a == num ) {
alert("this is right");
break;
}
else if (a > num ) {
alert("this is Smaller");
--limit;
}
else if (a < num ) {
alert("this is higher");
--limit;
}
}




