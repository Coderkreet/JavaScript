class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }


}
class Display {
    add(book) {
        console.log("adding")
        let tbody = document.getElementById('tbody');
        let uistring = `<tr>         
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr>
    `
        tbody.innerHTML += uistring;
    }
 
    clear() {
        let lybrabryform = document.getElementById('lybrabryform');
        lybrabryform.reset();
    }

    validate(book) {

        if (book.name.langth < 2 || book.author.langth < 2) {
            return false;
        }
        else {
            return true;
        }
    }


    show(type, dispmsg) {
        let message = document.getElementById('msg');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message!</strong>${dispmsg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        </button>
        </div>`
        setTimeout(function () {
            message.innerHTML = ""
        }, 2000);

    }
}


let  lybrabryform = document.getElementById('lybrabryform');
lybrabryform.addEventListener('submit', lybrabryformSubmit);

function lybrabryformSubmit(e){
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('Authorname').value;
    let type ;
    
    let DataStructore = document.getElementById('DataStructore');
    let Javascript = document.getElementById('Javascript');
    let Computer = document.getElementById('Computer');
    
if (DataStructore.checked) {
        type = DataStructore.value;
    
}

else if (Javascript.checked) {
    type = Javascript.value;
    
}
else if (Computer.checked) {
    type = Computer.value;
    
}

let book = new Book(name , author , type)
console.log(book);

let display = new Display();

if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show('success', 'well done mt champ' )
}

else{
    display.show('error', 'sorry you cant add book');
    
}

e.preventDefault();                                 // page not reload

}