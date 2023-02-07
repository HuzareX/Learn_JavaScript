//adding elements to object

const dogName = 'Wobler'
const dogAge = 1

const dog = {
	dogname: dogName,
	dogAge: dogAge,
	dogSound: () => {
		console.log('Hau Hau!')
	},
}

dog.dogSound()

dog.dogMan = 'Daniel'
dog['dogMan-Second'] = 'Weronika'

console.log(dog)
console.log('FOR IN')
// for in

for (const data in dog) {
	console.log(data + ':' + dog[data])
}
console.log('THIS')
// this

const user = {
	name: 'Daniel',
	showName() {
		console.log(this.name)
	},
}

user.showName()
console.log('CONSTRUCTOR/CLASS')
// constructor/class

class User {
	constructor(name1, age1) {
		this.name = name1
		this.age = age1
		this.hello = function () {
			console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`)
		}
	}
}

const newUser = new User('Klaudia', 23)
const newUser2 = new User('Tomek', 19)
console.log(newUser, newUser2)

newUser.hello()
newUser2.hello()
console.log('PROTOTYPE')
// prototype

class Auto {
	constructor(brand1, country1, mileage1) {
		this.brand = brand1
		this.country = country1
		this.mileage = mileage1
	}
}

const auto = new Auto('Audi', 'Deutschland', 15000)
const auto2 = new Auto('VW', 'Belgium', 10000)
const auto3 = new Auto('Mercedes', 'Poland', 50000)

Auto.prototype.info = function () {
	console.log(`It is ${this.brand} from ${this.country} that has traveled ${this.mileage}.`)
}

auto.info()
auto2.info()
auto3.info()
console.log('BIND')
// bind

function test() {
	console.log(this)
	console.log(this.name)
}

const car1 = {
	name: 'Audi',
}

const car2 = {
	name: 'Dodge',
}

const car3 = {
	name: 'Mercedes',
}

test.bind(car1)()
test.bind(car2)()
test.bind(car3)()
console.log('CALL & APPLY')
//APPLY/CALL

const movie = {
	title: 'Harry Potter',
}

function showMovie(price, cinema) {
	console.log(`Film: ${this.title}, price:${price}, kino:${cinema}.`)
}
//function.call(OBIEKT, ARGUMENTY)
showMovie.call(movie, 35, 'Helios')
//function.apply(OBIEKT, TABLICA)
showMovie.apply(movie, [35, 'Helios'])
console.log('CLASS')
//CLASS

class Person {
	constructor(name, age) {
		this.name = name
		this.age = age
	}

	sayHi() {
		console.log(`Hi im ${this.name}`)
	}

	showAge() {
		console.log(`I am ${this.age} years old.`)
	}
}

const Daniel = new Person('Daniel', 27)

Daniel.sayHi()
Daniel.showAge()

console.log('extends&super')
//EXTENDS&SUPER

class Animal {
	constructor(name) {
		this.name
	}

	sound() {
		console.log(`Zwierzak robi "miau miau"`);
	}
}

class Cat extends Animal{}

const cat = new Cat('Mruczek')
cat.sound()
console.log(cat);