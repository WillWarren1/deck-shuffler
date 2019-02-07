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

    let posI = deckOfCards[i]
    let posJ = deckOfCards[j]

    deckOfCards[j] = posI
    deckOfCards[i] = posJ
  }
  console.log(deckOfCards)
}

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent =
      'The Mighty Deck Shuffler!'
  }
  buildDeck()
  shuffleDeck()
}

const drawCard = () => {
  let newCard = deckOfCards.splice(0, 1)
  console.log(deckOfCards)
  if (deckOfCards.length > 0) {
    const _li = document.createElement('li')
    _li.textContent = newCard
    document.querySelector('ul').appendChild(_li)
  }
}
document.addEventListener('DOMContentLoaded', main)
document.querySelector('#draw').addEventListener('click', drawCard)
