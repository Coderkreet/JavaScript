console.log("this is CallBck ");

let Student = [
{Name : "sharuk" , Subject : "python"},
{Name : "salman" , Subject : "Javascript"}
]

function setStudent(student , CallBck){

setTimeout(() => {

Student.push(student);
console.log('student is pushed')
CallBck()

}, 1000);
}

function getStudent(){
setTimeout(() => {
set = "";
Student.forEach(Student => {
    
    set += `<li>${Student.Name} and subject is ${Student.Subject} </li>` 
});

document.getElementById('notes').innerHTML = set;

}, 1000);

}

let newstudent = {Name : "kreet" , Subject : "java"}
// getStudent();
setStudent(newstudent , getStudent)