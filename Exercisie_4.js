class Lybrery{

constructor(booklist){
this.booklist = booklist;
this.issuedBook = {};

}
getBookList(){

this.booklist.forEach(element => {
    
    console.log(element);
});

}

issueBook(bookname , user){
if (this.issuedBook[bookname] == undefined) {
    this.issuedBook [bookname] = user;
    
return `Rakh lo pr waps kr dena yaad se ${bookname}  book ko`
}
else{

console.log(`this book name is ${bookname} already Issued by someone`)
}
}

returnBook(bookname){

delete this.issuedBook[bookname]; 
return `${bookname}  book is return by someone`
}

}












