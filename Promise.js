// console.log('promise');

// function fun1(){
// return new Promise(function (resolve , reject) {
// setTimeout(() => {
//     let error = true;
// if (!error) {
//     console.log('resolve error')
//     resolve();
// }
// else{
// console.log("error occore")
// reject();
// }
// }, 2000);    
// })
// }

// fun1().then(
//    function () {
//      console.log("kreet : Thanks")
//    }

// ).catch(
//     function () {
//          console.log("Kreet : Opps!!")
//     }
   
// )




// Actual use
// let Student = [
//     {Name : "sharuk" , Subject : "python"},
//     {Name : "salman" , Subject : "Javascript"}
//     ]


//     function setStudent(student){

//         return new Promise(function(resolve , reject){

//   setTimeout(() => {
        
//         Student.push(student);
//         console.log('student is pushed')
//         let error = false; 
//         if (!error) {
//             resolve() ;
//         }
//         else{
//             reject();
//         } 
//         }, 1000);

//         })
      
//         }
        
//         function getStudent(){
//         setTimeout(() => {
//         set = "";
//         Student.forEach(Student => {
            
//             set += `<li>${Student.Name} and subject is ${Student.Subject} </li>` 
//         });
        
//         document.getElementById('notes').innerHTML = set;
        
//         }, 1000);
        
//         }
        
//         let newstudent = {Name : "kreet" , Subject : "java"}


//         setStudent(newstudent).then(function () {
//             getStudent();
//         }).catch(function () {

//             console.error("some error occured");
//         })
        
        // getStudent();


    //   =======My program=========

console.log('this is my program')
let foodBank = [{name : 'mango' , session : 'summer'},
{name : 'apple' , session : 'allrounder'}]

 function setFood(Food){
return new Promise(function (resolve , reject) {
    setTimeout(() => {

        foodBank.push(Food);
        let error = false;
        if (!error) {
            console.log("this is resolve")
            resolve();
        }
        else{
            console.error("reject");
            reject();
        }
    }, 2000);
})
} 

function getFood(){
    setTimeout(() => {
    let html = " ";

   foodBank.forEach(foodBank => {
    html += `<h5> name => ${foodBank.name}
    <br>
                session => ${foodBank.session}   
      </h5>`
});

document.getElementById('list').innerHTML = html;
}, 3000);
}

let Food = {name : "banana" , session : "allrounder"}

setFood(Food).then(getFood).catch(function () {
    
    console.error("some error occour")
})
