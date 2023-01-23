const sizeUp = document.querySelector('.plus')
const sizeDown = document.querySelector('.minus')
const color = document.querySelector('.color')
const paragraph = document.querySelector('p')

let fontSize = 36
let randomColor = 567

const up = () => {
    if (fontSize > 50) {
        return
    }
    fontSize += 5
    paragraph.style.fontSize = fontSize + 'px'

}

const down = () => {
    if (fontSize < 12) {
        return
    }
    fontSize -= 5
    paragraph.style.fontSize = fontSize + "px"

}

const changeColor = () => {
    paragraph.style.color = '#' + (Math.floor(Math.random()*16777215).toString(16))
}

sizeUp.addEventListener('click', up)
sizeDown.addEventListener('click', down)
color.addEventListener('click', changeColor)