console.log("les see constructor")

// let obj = {
//     neame : 'liza'
// }
// console.log(obj)

function func (name , game = 'kabbdi') {
    
this.modelname = name ;
this.palygame = game;
this.run = function () {
  console.log(`the neme is ${this.modelname} and the game is ${game}`)  
}
this.analyze = function () {
    
    console.log(`this is best player in this univars name is ${this.modelname}`)
}
}

 let fun = new func('kreet' );
 console.log(fun.modelname)