console.log("itrator in js ");

function Itr(arr) {
let val = 0;
return{

next : function(){
if (val < arr.length) {
   
   return{
    valur : arr[val++],
    done : false
   }
}
else{
return{
    done : true
}
}
}
}
}

let arr = ['apple' , 'mango' , 'orange']
let b = Itr(arr);
console.log(b.next().done);
console.log(b.next().done);
console.log(b.next().done);


