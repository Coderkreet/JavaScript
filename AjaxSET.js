console.log("hy i am the best ");

let foodBtn = document.getElementById('foodBtn');

foodBtn.addEventListener('click' , food)

function food() {
    console.log("click");
    let xml = new XMLHttpRequest;
    xml.open('POST' , 'kreet.txt' , true);
    xml.getResponseHeader()


}