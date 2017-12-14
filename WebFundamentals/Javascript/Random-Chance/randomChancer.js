"use strict";


//make a function that takes a number of quarters (1 quarter = 1 game). There is a 1 in 100 chance to win the slot
//machine which will give you back between 50 -100 quarters. Use Math.random andMath.floor to pick random number of coins.
// While the user still has quarters, use Math.rando, to determine if they won. If they win, rerturn the num of quarters 
//if they win - example: they had 50 remaning and won 90 sothe return should be 140.


//player should call the function with the number of coins they are willing to gamble.
function slotWinner(playersCoins){
    console.log('Welcome to the 1 coin per play slot machine. Winners will receive between 50-100 coins!!!')
    //a while loop to run as long as player has coins left to play...
    while (playersCoins > 0){
        console.log('The player starts with', playersCoins, 'coin(s)');
        playersCoins--; //no mater what you gotta pay top play so first subtract 1 coin from players total.
        var winnerCheck = Math.floor(Math.random() * 100); //use this randomly generated number in a conditional to see if you've won
        console.log('If your random between 1 and 100 number is 1 or less you win. Your number is:', winnerCheck);
        
        if (winnerCheck <= 1){
            var winAmount = Math.floor((Math.random()*50)+50); //random number between 50 and 100
            console.log('You won:', winAmount, 'coins!');
            playersCoins += winAmount;
            console.log('Now you have a total of:', playersCoins, 'coins. Congratulations!!!')
        }
        else{
            console.log('So sorry for your loss...')
            console.log('you have:',playersCoins, 'coins left');
        }
    } 
    console.log('You are out of coins - come back when you have mare $ to play again - Thank you!'); 
}


slotWinner(6);