console.log("math thag in regular expressoin");

let reg = /kreet/;
 reg = /^kre/;  //(^) Caret symbol is is work if your string mach in this one or more character the execute 
 reg = /eet$/; // ($)pound simble is work if your string last element character is matched the will execute 
reg = /kr.et/  // (.)dough.. if your character one word is missing/chang the will execute easly
reg = /k*reet/ // (*)star . mach any 0 to more character in => let str = "kopppreet front of "
reg = /kr?ee?t/ // (?) Qustion Mark ... in this case r is optsional  but r is not  replace l dont Replace 
let str = "kreet front of ";
let resutl = reg.exec(str);
console.log(resutl);
if (reg.test(str)) {

console.log(`inside the string => ${str} match  reg => ${reg}` );

}
else{
    
    console.log(`the reg => ${reg} is not inside the string => ${str}`);

}