// set initial count
let initialValue = 0;
const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');


btns.forEach( btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.classList[1] === 'decrease'){
            initialValue--;
        }
        if(e.target.classList[1] === 'reset'){
            initialValue = 0;
        }
        if(e.target.classList[1] === 'increase'){
            initialValue++
        }
        
        if(initialValue <= -1){
            value.style.color = 'red';
        }else if (initialValue >= 1){
            value.style.color = 'green';
        }else {
            value.style.color = '#333347';
        }
        value.textContent = initialValue;
    } )
})