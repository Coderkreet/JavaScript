// console.log("my");

// let creatDive = document.createElement('div');
// let vall = localStorage.getItem('txt');
// let txt;
// if (vall == null) {
//  txt = document.createTextNode('this is edit able div');
// }
// else{
// txt = document.createTextNode(vall);
// }
// creatDive.appendChild(txt);

// creatDive.setAttribute('id' , 'idDiv');
// creatDive.setAttribute('style' , 'border : 2px solid black ; width: 189px; margin : 123px , padding :22px; '  )
// console.log(creatDive);
// let cont = document.getElementById('cont');
// let myfirst = document.getElementById('myfirst');
// cont.insertBefore(creatDive , myfirst)

// // Add Event 

//  creatDive.addEventListener('click' , function () {
//   let nottext = document.getElementsByClassName('formcontrol').length;

//   if (nottext == 0) {
    
//   let html = idDiv.innerHTML; 
//   creatDive.innerHTML = `<textarea class="formcontrol" id="addtxt" rows="3">${html}</textarea>`
//   }

//  let textarea = document.getElementById('addtxt');
//  textarea.addEventListener('blur' , function () {
// idDiv.innerHTML  = textarea.value; 
// localStorage.setItem('txt', idDiv.innerHTML);

//  })

//  })



console.log("es6 classes");

class Student{
constructor(name , classes , subject){
this.name = name;
this.classes = classes;
this.subject = subject;
}

slogan(){

return `i am ${this.name} the best student in this school`

}
}

class teacher extends Student{
constructor(name , classes , subject , staf){

super(name , classes , subject);
this.staf = staf;

}

notes(){
return `i sm the teacher in this collage name ${this.name}`

}

}
let rohan = new Student ("kreet" ,"3ed year" , "bca")
let kret = new teacher("rohan" , "4th" , "bio" , 6)
console.log(rohan.slogan());
console.log(kret.notes());



// console.log(rohan);