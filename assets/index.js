//Objects
const player = {
    name: "",
    chips: 0,
    cards: [],
    sum: 0
}

const dealer = {
    name: "",
    chips: 0,
    cards: [],
    sum: 0
}

//Global Variables
var firstCard
var secondCard
var sum

//DOM Variables
var playerCounter_El = document.getElementById("playerCounter")
var dealerCounter_El = document.getElementById("dealerCounter")
var dealerCards_El = document.getElementById("dealerCards")
var playerCards_El = document.getElementById("playerCards")
var hitBtn_El = document.getElementById("hitBtn")
var stayBtn_El = document.getElementById("stayBtn")
var startBtn_El = document.getElementById("startBtn")
var playBtn_El = document.getElementById("playBtn")
var playerGameMessage_El = document.getElementById("playerGameMessage")
var dealerGameMessage_El = document.getElementById("dealerGameMessage")
var playBoard_El = document.getElementById("playBoard")
var gameBoard_El = document.getElementById("gameBoard")
var startBoard_El = document.getElementById("startBoard")

//Functions
function dealPlayerCards(){
    firstCard = (Math.floor(Math.random() * 11) + 1)
    secondCard = (Math.floor(Math.random() * 11) + 1)
    sum = firstCard + secondCard
    player.sum = sum
    player.cards = [firstCard, secondCard]
    playerCounter_El.textContent = "Total: " + player.sum
    playerCards_El.textContent = "Cards: " + (player.cards[0]) + ", " + (player.cards[1])
}


function playGame(){
    player.name = document.getElementById("playerName").value
    player.chips = 300
    startBoard_El.style.display = `none`
    playBoard_El.style.display = `block`

}



function dealCards(){
    playBoard_El.style.display = `none`
    gameBoard_El.style.display = `block`
    dealPlayerCards()
    checkBlackJack()
}


function playerHit(){
    card = (Math.floor(Math.random() * 11) + 1)
    player.cards.push(card)
    player.sum += card
    playerCounter_El.textContent = "Total: " + player.sum
    playerCards_El.textContent = "Cards: " + (player.cards.join(", "))
    checkBlackJack()
}

function checkBlackJack(){
    if (player.sum === 21) {
        playerGameMessage_El.textContent = "Blackjack! You win!";
        
    } else {
        playerGameMessage_El.textContent = "Would you like to hit or stay?";
    }
}