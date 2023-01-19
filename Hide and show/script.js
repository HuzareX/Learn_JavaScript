const two = document.querySelector('.two')
const button = document.querySelector('.showhide')
const arrow = document.querySelector('.fa-solid')

const show = () => {
    two.classList.toggle('show')
    arrow.classList.toggle('down')
}

button.addEventListener('click', show)



