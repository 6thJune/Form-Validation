const showHideBtn = document.querySelector('.show-hide-btn');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexUsername = /^[a-zA-Z0-9_]{4,20}$/;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

let isShow = false;

showHideBtn.addEventListener('click', () => handleShowHide());

email.addEventListener('blur', () => {
    if (regexEmail.test(email.value))
        handleValidValue(email);
    else {
        const message = 'Email is invalid';
        handleInValidValue(email, message);
    }
})

username.addEventListener('blur', () => {
    if (regexUsername.test(username.value))
        handleValidValue(username);
    else {
        const message = '4-20 chars, letters/numbers/_';
        handleInValidValue(username, message);
    }
})

password.addEventListener('blur', () => {
    if (regexPassword.test(password.value))
        handleValidValue(password);
    else {
        const message = '8+ chars, A-Z, a-z, 0-9';
        handleInValidValue(password, message);
    }
})

function handleShowHide() {
    if (!isShow) {
        isShow = !isShow;
        password.type = 'text';
        showHideBtn.textContent = 'Hide';
    }
    else {
        isShow = !isShow;
        password.type = 'password';
        showHideBtn.textContent = 'Show'
    }
}

function handleValidValue(input) {
    const small = input.parentElement.nextElementSibling;
    small.style.visibility = 'hidden';
    input.classList.remove('error');
    input.classList.add('success');
}

function handleInValidValue(input, message) {
    const small = input.parentElement.nextElementSibling;
    small.textContent = message;
    small.style.visibility = 'visible';
    input.classList.add('error');
    input.classList.remove('success');
}