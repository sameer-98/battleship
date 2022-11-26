import player from "./player";
import UI from "./dom";

const app = () => {

    const player1 = player('Sameer');
    const player2 = player('AI');
    
    
    // place ships randomly and get the boards
    const board1 = player1.gameboard.placeShipsRandomly();
    const board2 = player2.gameboard.placeShipsRandomly();

    console.table(board1);
    console.table(board2);

    // render the boards
    UI().renderBoard('player1', player1);
    UI().renderBoard('player2', player2);
   
    console.log(UI().hasAttacked);
    console.log(player1.gameboard.shipsSunk());

    
    
    // while (player1.gameboard.shipsSunk() !== true || player2.gameboard.shipsSunk() !== true){
    //         const banner = document.querySelector('.blinking');
    //         banner.textContent = 'Your Turn!';
    //         if (UI().hasAttacked === true){
    //             banner.textContent = "PC's turn";
    //             let attack = player2.attackRandomly(player1);
                
    //             (attack.status) ? UI().renderHit : UI('player1', attack.x, attack.y).renderMiss('player1', attack.x, attack.y);
    //             UI().setHasAttack(true);
    //             }
    //         }
    
  
    
}



export default app;