
const button = document.querySelector('button')
const background = document.querySelector('body')
const text = document.querySelector('.code')


function reactionClick(event){
    const random = (Math.random() * 0xFFFFFF << 0).toString(16);
    event.target.style.backgroundColor = "#" + random
    background.style.backgroundColor = "#" + random
    text.innerText = "#" + random;
}

button.addEventListener('click', reactionClick)



