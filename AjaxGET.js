console.log("hii Ajax");

let foodBtn = document.getElementById('foodBtn');

foodBtn.addEventListener('click' , getFood);

function getFood() {
console.log('click food');
const xhr = new XMLHttpRequest();

xhr.open('GET' , 'food.txt' , true);

xhr.onload = function(){

    if(this.status === 200){

 let obj =JSON.parse(this.responseText);

 let list = document.getElementById('list')
txt = " ";
for (key in obj){

 txt  += `<li> ${obj[key]}</li>`; 

}
list.innerHTML = txt;

    }
else{
console.log('error ouccr')

}

}

xhr.send();
}

let froutBtn = document.getElementById('froutBtn');

froutBtn.addEventListener('click' , getFrout);

function getFrout() {
console.log('click food');
const xhr = new XMLHttpRequest();

xhr.open('GET' , 'frout.txt' , true);

xhr.onload = function(){

    if(this.status === 200){

 let obj =JSON.parse(this.responseText);

 let list = document.getElementById('list')
txt = " ";
for (key in obj){

 txt  += `<li> ${obj[key]}</li>`; 

}
list.innerHTML = txt;

    }
else{
console.log('error ouccr')

}
}
xhr.send();
}

