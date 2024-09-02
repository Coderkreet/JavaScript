console.log('storage')
let arr = ['kreet', 'krunal' , 'kunal' ];

localStorage.setItem('name' , 'kreet')
localStorage.setItem('name2', 'Rohit')

localStorage.setItem('namee', JSON.stringify(arr));

let set = JSON.parse( localStorage.getItem('namee'));


console.log(set)

sessionStorage.setItem('name' , 'kreet')
// localStorage.clear();