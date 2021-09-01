let isAlive = false
let aliveOnCurrent = false
let numChips = 50

const CURRENTLY_RUNNING = "Do you want to draw a card?"
const WON = "You got blackjack!"
const LOST = "You lost"

const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const playerEl = document.getElementById("player-el")
const gameStart = document.getElementById("start-blackjack")

function createRandomCard() {
    rand = Math.floor(Math.random() * 13 + 1);
    if (rand === 1) {
        return 11
    } else if (rand > 10) {
        return 10
    } else {
        return rand
    }
    
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        state = CURRENTLY_RUNNING
    } else if (sum === 21) {
        state = WON
        hasBlackJack = true
        numChips += 20
    } else {
        state = LOST
        aliveOnCurrent = false
        numChips -= 10
    }
    checkChips()
    playerEl.innerHTML = "Your Chips: " + numChips
    messageEl.innerHTML = state
    console.log(state)
}

// starts the Game when you first enter the website, as well as 
// initializing the number of chips back to 50 if you were to restart
function startGame() {
    numChips = 50
    startBlackjack()
    gameStart.innerHTML = "START"
    gameStart.onclick = startBlackjack
}

// starts a single round of Blackjack
function startBlackjack() {
    hasBlackJack = false
    aliveOnCurrent = true
    firstCard = createRandomCard()
    secondCard = createRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function drawCard() {
    if (aliveOnCurrent && !hasBlackJack) {
        newCard = createRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}

function checkChips() {
    if (numChips <= 0) {
        isAlive = false
        console.log("LOST!!!")
        gameStart.innerHTML = "RETRY?"
        gameStart.onclick = startGame
    }
}