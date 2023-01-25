const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let farenheit
let celsius


const celToFar = () => {
    farenheit = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${farenheit.toFixed(1)}°F`
    converter.value = ''
}

const farToCel = () => {
    celsius = (converter.value - 32) / 1.8
    result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
    converter.value = ''
}

const conversion = () => {
    if (converter.value !== '') {
        if (one.textContent === '°C') {
            celToFar()
        } else if (one.textContent === '°F'){
            farToCel()
        }
    } else {
        result.textContent = 'Musisz wybrać jakąś liczbę!'
    }
}

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
        result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
        result.textContent = ''
	}
}

const reset = () => {
    one.textContent = '°C'
    two.textContent = '°F'
    result.textContent = ''
    converter.value = ''
}


changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
resetBtn.addEventListener('click', reset)
