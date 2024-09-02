console.log("child node / child node");

 let mon = document.getElementById('mon')
// console.log(mon.children);
mon.style.fontFamily = "Courier New"
mon.style.color =  'red'
mon.style.fontSize = 'large'
mon.style.fontWeight = 'bolder';

mon = mon.firstElementChild;
// console.log(mon);

// let cont = document.querySelector('.myfirst');

// cont = cont.firstElementChild.firstElementChild.nextElementSibling;
// cont.style.color = 'red';
// cont.style.fontWeight = 'bolder';

// cont.innerHTML = '<b> i am kreet </b>'

//  cont = cont.parentNode;
// console.log(cont);



let cont = document.getElementsByTagName('ul')

console.log(cont);

Array.from(cont).forEach(element => {
    
console.log(element);
element.style.color = 'red';

});

