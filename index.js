const [input0, input1] = document.querySelectorAll('input');
const label0 = document.querySelector('.box-username label');
const label1 = document.querySelector('.box-password label');
const button = document.querySelector('#btt-start');

function action(){
    if(input0.value && input1.value.length >= 6){
        button.removeAttribute('disabled');
        console.log(input0.value && input1.value);
    }else{
        button.setAttribute('disabled', 'disabled')
    }
    if(input0.value){
        label0.style.transform = 'translate(8%,25%)'; 
        label0.style.top = '0';
        label0.style.left = '0';
        label0.style.fontSize = '0.70rem';
        label0.style.transition = '0.15s ease';
    }else{
        label0.style.transform = 'translateY(-50%)';
        label0.style.left = '1rem';
        label0.style.top = '50%';
    }
    if(input1.value){
        label1.style.transform = 'translate(22%,25%)';
        label1.style.top = '0';
        label1.style.left = '0';
        label1.style.fontSize = '0.70rem';
        label1.style.transition = '0.15s ease';
    }else{
        label1.style.transform = 'translateY(-50%)';
        label1.style.left = '1rem';
        label1.style.top = '50%';
    }
}

input0.addEventListener('input', action);
input1.addEventListener('input', action);

function loosingFocus(){
    input0.style.fontSize = '1rem';
    input0.style.padding = '0.75rem 0 0 0.5rem';
    input1.style.fontSize = '1rem';
    input1.style.padding = '0.75rem 0 0 0.5rem';
}

input0.addEventListener('blur', loosingFocus);
input1.addEventListener('blur', loosingFocus);
