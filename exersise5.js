console.log("hy my name is the kreet ")
//fach apis
let addbtn = document.getElementById('addbtn')

addbtn.addEventListener('click' , Fatchapis);

function Fatchapis() {
    console.log("click")
let xml = new XMLHttpRequest;
xml.open('GET' , 'love.json' , true);

xml.onprogress = function () {
    console.log("onprogress");

}

xml.onload  = function(){
if (this.status === 200) {
    
    let obj = JSON.parse(this.responseText);
console.log(obj.results);

    for (let index = 0; index < obj.results.length; index++) {
                const element = obj.results[index]["definition"];
                console.log(element);
                display(element)
            }
}
else{
console.log( `it is an error`);
}
}
xml.send();
}


// Display Function

function display(element) {
    let html = " ";

html += `<li> Defination of givrn example => ${element}</li>`

document.getElementById('list').innerHTML += html;

}
