// console.log('hy lets som code')

// document.getElementById("heading").addEventListener("click", function (e) {
//     console.log('click ij heading tag')

//     let event =  Array.from( e.target.className);


//     console.log(event);


    // location.href = "//facebook.com";


// })



// ===========More on Events===================


console.log('this is kreet')
let btn = document.getElementById('btn');

btn.addEventListener('click', fun);
btn.addEventListener('dblclick', fun2);


function fun() {

console.log('you click one time')
btn.style.background = 'red'
}


function fun2() {

    console.log('you click btn 2 times')
    btn.style.background ='blue'
    
}

// let myul = document.getElementById('myul')

// myul.addEventListener('mousemove', func);

// function func(e) {

// console.log('this is ul');

// document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, 88)`
// // myul.style.background = "red"

    
// }