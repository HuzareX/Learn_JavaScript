const today = document.querySelector('.current-day')
const quote = document.querySelector('.quote')

const quotes = ['“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.” —Dr. Suess', '“Love yourself first and everything else falls into line. You really have to love yourself to get anything done in this world.” —Lucille Ball','“Let us always meet each other with smile, for the smile is the beginning of love.” —Mother Teresa', '“It is not a lack of love, but a lack of friendship that makes unhappy marriages.” —Friedrich Nietzsche','“Love is that condition in which the happiness of another person is essential to your own.” —Robert A. Heinlein','“The best thing to hold onto in life is each other.” —Audrey Hepburn','You know it’s love when all you want is that person to be happy, even if you’re not part of their happiness. —Julia Roberts', '“You always gain by giving love.” Reese Witherspoon'  ]

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const day = new Date ();
let currentDay = weekday[day.getDay()]

today.textContent = currentDay


const showRandomQuote = () => {
    const number = Math.floor(Math.random() * quotes.length)
    quote.textContent = quotes[number]
}

showRandomQuote()

