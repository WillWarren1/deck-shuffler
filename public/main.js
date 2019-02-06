let valueOfCard = [
  'ace',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'jack',
  'queen',
  'king'
]

let suitOfCard = ['spades', 'hearts', 'clubs', 'diamonds']

let deckOfCards = []

const buildDeck = () => {
  for (let cardValue = 0; cardValue < valueOfCard.length; cardValue++) {
    console.log(cardValue)
    for (let cardSuit = 0; cardSuit < suitOfCard.length; cardSuit++) {
      console.log(cardSuit)

      let cardText = valueOfCard[cardValue] + ' of ' + suitOfCard[cardSuit]

      console.log(cardText)

      deckOfCards.push(cardText)
    }
  }
  console.log(deckOfCards)
}

const shuffleDeck = () => {
  for (let i = 51; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deckOfCards[i], deckOfCards[j]] = [deckOfCards[j], deckOfCards[i]]
  }
  console.log(deckOfCards)
}
const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
  buildDeck()
  shuffleDeck()
}
const drawCard = () => {
  deckOfCards.splice[0]
  console.log(deckOfCards)
}

document.querySelector('.draw').addEventListener('click', drawCard)

document.addEventListener('DOMContentLoaded', main)
