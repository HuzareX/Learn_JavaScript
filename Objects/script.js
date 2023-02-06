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

// for in

for (const data in dog) {
	console.log(data + ':' + dog[data])
}

// this

const user = {
	name: 'Daniel',
	showName() {
		console.log(this.name)
	},
}

user.showName()

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
