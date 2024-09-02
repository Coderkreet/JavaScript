console.log('Regular expressino');

let reg = /kreet/;  
//  reg = /kreet/g;  
//  reg = /kreet/i;

// console.log(reg.source);
// console.log(reg);

let str = "loveing boy kreet is the good boy and kreet is also good coder"
// let result = reg.exec(str);
// console.log(result);
//  result = reg.exec(str);
// console.log(result);
// console.log(result.input);
// console.log(result.index);

// Test
// let  result2 = reg.test(str);
// console.log(result2);

// Match

// let result4 = str.match(reg)
// console.log(result4);


//search 
// let result5 = str.search(reg);
// console.info(result5);


// Replace
let result6 = str.replace(reg , 'harry')
console.log(result6);








