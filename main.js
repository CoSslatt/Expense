const inputs = document.querySelectorAll('.input-item');
const userContent = document.querySelector('.user-section');

const submit = document.querySelector('.submit');

submit.addEventListener('click', e => {
    inputsValue();
;})

const inputsValue = () => {
    for(let i=0; i<inputs.length; i++){
        const span = document.createElement('span');

        const newChild = userContent.appendChild(span);
        newChild.classList.add('user-content');
        newChild.innerText = inputs[i].value;
    }
};