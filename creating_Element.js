// ===========CREATING ELEMENT============


console.log('hy this is kreet');

let ele = document.createElement('li');
ele.className =  'mycls'
ele.id = 'myid'

ele.innerText = 'i am the best';

let ul = document.querySelector('ul')
ul.appendChild(ele)
// console.log(ul);
// console.log(ele);


//==========REPLACE ELEMETN===================\

let kreet = document.createElement('h4');

kreet.className = 'thunder';
kreet.id = 'thunder2'
kreet.innerText = 'My Goodness'

let tom = document.getElementById('tom')
// tom.appendChild(kreet)
tom.replaceWith(kreet);


//---child replacement

let myul = document.getElementById('myul');
myul.replaceChild(ele,document.getElementById('lop'))


// console.log(tom)
// console.log(kreet);

//==========REMOVE============

myul.removeChild(document.getElementById('man'));
kreet.removeAttribute('class')

