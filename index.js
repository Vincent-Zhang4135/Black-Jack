isAlive = false
player = {
    name : "Vincent",
    chips : 123
}
messageEl = document.getElementById("message-el")
cardsEl = document.getElementById("cards-el")
sumEl = document.getElementById("sum-el")
playerEl = document.getElementById("player-el")

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

function startGame() {
    hasBlackJack = false
    isAlive = true
    firstCard = createRandomCard()
    secondCard = createRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i += 1) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got black jack!"
        hasBlackJack = true
    } else {
        message = "You lost"
        isAlive = false
    }
    playerEl.innerHTML = player.name + ": $" + player.chips 
    messageEl.innerHTML = message
}

function drawCard() {
    if (isAlive && !hasBlackJack) {
        newCard = createRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}