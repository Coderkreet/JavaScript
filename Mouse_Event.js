// this is mouse over event

console.log('mouseEvent');

let cont = document.getElementById('cont')

// cont.addEventListener('mouseover', function (e) {

// cont.style.backgroundColor = ` rgb( ${e.offsetX} , ${e.offsetY} , 223)`

// } )

cont.addEventListener('mouseover', function (e) {
       cont.style.backgroundColor = `rgb(${e.offsetX} , ${e.offsetY} , 68)`;
        

})
console.log(cont);


