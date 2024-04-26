//Objects
const player = {
    name: "",
    chips: 1000,
    cards: [],
    sum: 0,
    currentBid: 0
}

//Global Variables
var firstCard
var secondCard
var sum

//DOM Variables
var player_name_El = document.getElementById("playerName")
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
var rePlay_El = document.getElementById("rePlay")
var playerChipsLabel_El = document.getElementById("playerChipsLabel")
var playerNameLabel_El = document.getElementById("playerNameLabel")
var playerBidLabel_El = document.getElementById("playerCurrentBid")

function newGameStart (){
    startBoard_El.style.visibility = `hidden`
    playBoard_El.style.visibility = `visible`
}


//Functions


function resetGameBoard(){
    hitBtn_El.style.visibility = `visible`;
    stayBtn_El.style.visibility = `visible`;
    rePlay_El.style.visibility = `hidden`;
    playerGameMessage_El.textContent = " "

}

function resetGame(){
    player.name = document.getElementById("playerName").value
    player.currentBid = document.getElementById("playerBet").value
    player.chips =  player.chips - player.currentBid 
    playerNameLabel_El.textContent = "Name: " + player.name
    playerBidLabel_El.textContent = "Current Bid: " + player.currentBid
    playerChipsLabel_El.textContent = "Remaining Chips: " + player.chips
}


function playGame(){
    startBoard_El.style.visibility = `hidden`
    playBoard_El.style.visibility = `hidden`
    gameBoard_El.style.visibility = `visible`
    resetGameBoard()
    resetGame()
    dealPlayerCards()
    checkBlackJack()
}


function dealPlayerCards(){
    firstCard = (Math.floor(Math.random() * 11) + 1)
    secondCard = (Math.floor(Math.random() * 11) + 1)
    sum = firstCard + secondCard
    player.sum = sum
    player.cards = [firstCard, secondCard]
    playerCounter_El.textContent = "Total: " + player.sum
    playerCards_El.textContent = "Cards: " + (player.cards[0]) + ", " + (player.cards[1])
}

function playerHit(){
    card = (Math.floor(Math.random() * 11) + 1)
    player.cards.push(card)
    player.sum += card
    playerCounter_El.textContent = "Total: " + player.sum
    playerCards_El.textContent = "Cards: " + (player.cards.join(", "))
    checkBlackJack()
}

function playerStay(){
    playerGameMessage_El.textContent = "Stay. You have " + player.sum
    hitBtn_El.style.visibility = `hidden`;
    stayBtn_El.style.visibility = `hidden`;
    rePlay_El.style.visibility = `visible`;

}


function checkBlackJack(){
    let sum = player.sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hitBtn_El.style.visibility = `hidden`;
        stayBtn_El.style.visibility = `hidden`;
        rePlay_El.style.visibility = `visible`;
    } else {
        message = "Busted! You're out of the game! Play again?"
        hitBtn_El.style.visibility = `hidden`;
        stayBtn_El.style.visibility = `hidden`;
        rePlay_El.style.visibility = `visible`;
  
 }
    playerGameMessage_El.textContent = message
}