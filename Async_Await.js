console.log('Asink and Await')

async function kreet() {
    console.log("inside the function")

    const responce = await fetch('food.txt')
    const user =  await responce.json()

    return user;
}

let a =  kreet();

a.then(data => console.log(data));
console.log(a);