console.log("this is Generator");

function* Generator(arr){
i = 0;
while (true) {
    yield  arr[i++];
}
// yield arr [i++];
// yield arr[i++];

}

let arr = ['banana' , 'orange']

let g = Generator(arr);

console.log(g.next());
console.log(g.next());

