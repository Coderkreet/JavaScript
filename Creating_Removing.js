console.log('creating removing replace Event');

let ele = document.createElement('li');
// ele = document.createTextNode ('i am the best')
ele.className= 'lol'
ele.id = 'gol'
ele.innerText= 'this is the best thing';
let myfirst  = document.querySelector('.myfirst')
myfirst.appendChild(ele);

// console.log(ele);


let ele2 = document.createElement ('h1');
ele2.id= 'sir';
ele2 .className = 'mam';
ele2.removeAttribute('class')
ele2.innerText = 'i am the best';
console.log(ele2);

// ele.replaceWith(ele2);

let man = document.getElementById('myul');
man.replaceChild(ele2 , document.getElementById('kok'))

//==========REMOVING+++++++++++++

let mon = document.querySelector('#mon')
 mon = mon.removeChild(document.getElementById('lol'));

console.log(mon);



