const buttonSubscribing = document.querySelector('.subscribing')
const buttonCheckout = document.querySelector('.dismiss-button')
const newsletter = document.querySelector('.main')
const checkout = document.querySelector('.checkout')
const error = document.querySelector('h3')
const input = document.querySelector('input')
const spanEmail = document.querySelector('span')



buttonSubscribing.addEventListener('click', () => {
    const input = document.querySelector('input')
    if(validateEmail(input.value)){
        newsletter.style.display = "none"
        checkout.style.display = "flex"
        error.style.display = "none"
        spanEmail.innerText = input.value
    }else{
        error.style.display = "block"
        input.style.backgroundColor = "hsl(4, 100%, 88%)"
        input.style.borderBlockColor = "red"
        input.classList.add('placeholder-color-change')
    }
})

buttonCheckout.addEventListener('click',() => {
    location.reload();
})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}