const btn1 = document.querySelector('.one')
const btn2 = document.querySelector('.two')
const btn3 = document.querySelector('.three')
const info = document.querySelector('.info')


class Food {
    constructor(foodName, foodPrice) {
        this.foodName = foodName
        this.foodPrice = foodPrice
    }
}

const food1 = new Food ('Spaghetti', 15)
const food2 = new Food ('Fries', 7)
const food3 = new Food ('Egg', 4)

Food.prototype.showInfo = function () {
    info.textContent = `${this.foodName} cost ${this.foodPrice} PLN.`
}

btn1.addEventListener('click', () => food1.showInfo() )
btn2.addEventListener('click', () => food2.showInfo() )
btn3.addEventListener('click', () => food3.showInfo() )