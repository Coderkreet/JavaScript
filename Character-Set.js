console.log("character set in js ");
let reg = /kreet/
//character Set
reg = /kre{0,2}t/   // const str = "krt bhai"
reg = /kr[0-9]et/  // const str = "kr0et bhai"
reg = /kre[atf]t/  //const str = "kreft bhai"
reg = /kre[^atf]t/  //const str = "kreet bhai"
reg = /kre[a-z A-Z]t/  //const str = "kreEt bhai"
reg = /kr[0-9]e[yul]/  //const str = "kr8ey bhai"

// Quantifiers
reg = /kre{2}t/  //const str = "kreet bhai"


//Grouping 
reg = /(kreet){2}/ //const str = "kreetkreet bhai"
reg = /kr([0-9]r){2}t/ //const str = "kr0r3rt bhai"


const str = "kr0r3rt bhai"


if (reg.test(str)) {
    console.log(` ${str}=> this is valed ${reg}`);
}
else{

console.log(`this is not valid ${reg}`);
    
}