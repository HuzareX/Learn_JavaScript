const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
    if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)) {
        p.textContent = "No gościu, jest bajeczka! 👍"
        p.style.color = 'lime'
    } else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)) {
        p.textContent = 'No powiedzmy... dodaj jeszcze jakiś znaczek 🤔'
        p.style.color = 'yellow'
    } else if (pass.value.length < minValue) {
        p.textContent = 'Chopie! Byle Brajanek Cię okradnie! 🤣'
        p.style.color = 'red'
    } else if (pass.value.length = 0) {
        p.textContent = 'Nie podałeś hasła'
    }
}

const checkPass = () => {
    if (pass.value !== '') {
        showMsg()
    } else {
        p.textContent = 'Nie podałeś hasła...'
        p.style.color = ''
    }
}

pass.addEventListener('keyup', checkPass)