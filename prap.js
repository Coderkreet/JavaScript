console.log('this is quize');

let b = document.createElement('div');
b.innerText = 'this is editable div'
b.setAttribute('contenteditable' , 'true')
document.body.append(b);


b.addEventListener('input', function () {
    localStorage.setItem('edititem' , `${b.innerText}`)

})
console.log(b);
