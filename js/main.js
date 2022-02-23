let button = document.getElementById('btn');
button.style.background = 'transparent'
button.style.border = '1px solid';
button.style.color = '#DD3142';

let input = document.getElementsByTagName('input');
input[0].value = null;

input[1].value = 'example';

input[2].placeholder = 'email@mail.com';

document.getElementsByClassName('form-title')[4].remove();
input[4].remove();

let check = document.getElementById('chek').checked = true;

for (let i = 0; i < input.length; i++){
    input[i].style.borderColor = 'black';
}