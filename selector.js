
// console.log(element);


// let  element = document.getElementById('loop1');
//  document.getElementById('nav').style.color = 'blue';

// element = element.className;

// console.log(element.innerHTML);

// element.style.color = 'red';



//suery selector






console.log("welcome code with kreet")

let element = document.getElementById('love');

element.style.color = 'red';
element.innerText = 'kreet is good guys'
element.innerHTML = '<b>kreet is a good coder</b>'
// console.log(element);

//query selector

let sel = document.querySelector('#mariyo')

sel = document.querySelector('.myclass')

// sel = document.querySelector('b')
// sel.style.color = 'green'

// console.log(sel);

// --------------------------------------------------

// Multiple line selector

let lol = document.getElementsByClassName('myclass  ');


console.log(lol[0].getElementsByClassName('cola'));


Array.from(lol).forEach(element => {
    
console.log(element);
element.style.color = 'yellow'

});
