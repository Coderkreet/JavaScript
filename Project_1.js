console.log("nots");
shownodes();

addbtn.addEventListener('click' , function (e) {
let addtxt = document.getElementById('addtxt');
 let notes = localStorage.getItem("notes")


if (notes == null) {
    notesObj = [];
}
else{

notesObj = JSON.parse(notes);    

}

notesObj.push(addtxt.value);
localStorage.setItem('notes' , JSON.stringify(notesObj));
addtxt.value = "";

console.log(notesObj);

shownodes();
})


function shownodes () {
let notes = localStorage.getItem("notes")    
if (notes == null) {
    notesObj = [];
}
else{

notesObj = JSON.parse(notes);    

}

let html = "";

notesObj.forEach( function(element , index) {
    
 html += `<div class="noteCard my-2 mx-2  card" style="width: 18rem;">
<div class=" car-body">
    <h5 class="card-title">${index+1}</h5>
    <p class="card-text">${element}</p>
    <button id = "${index}" onclick = "deletenode(this.id)" class="btn btn-primary">Delete</button>
</div>
</div> `

});

let noteselement = document.getElementById('notes');

if (notesObj.length =! 0) {
    
    noteselement.innerHTML = html;
}
else{

    noteselement.innerHTML = "nothing to show"

}
}

// Delete Node
function deletenode(index) {
    
console.log("i am deleteing" , index)


let notes = localStorage.getItem("notes")    
if (notes == null) {
    notesObj = [];
}
else{

notesObj = JSON.parse(notes);    

}
notesObj.splice(index , 1);
localStorage.setItem('notes' , JSON.stringify(notesObj));

shownodes();

}

// Searching

let searchTxt = document.getElementById('searchTxt');

searchTxt.addEventListener('input', function () {
    let inputval  = searchTxt.value;

let notescard = document.getElementsByClassName('noteCard')
 
Array.from(notescard).forEach(function (element) {
    
    let cardtxt = element.getElementsByTagName('p')[0].innerText;

if (cardtxt.includes(inputval)) {
    
    element.style.display = "block";
}
else{
    element.style.display = "none";


}


})

})




if ( addtxt.value == "") {
    addbtn.style.display = none;
}



