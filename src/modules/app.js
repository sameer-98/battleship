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
    UI().renderBoard('player1',player1);
    UI().renderBoard('player2',player2);

    let nextPlayer = 0;
    while (player1.gameboard.shipsSunk() || player2.gameboard.shipsSunk()){
        const banner = document.querySelector('.blinking');
        if (UI().hasAttacked === true){
            banner.textContent = "PC's turn";
            player2.attackRandomly(player1);
        }
    }

    
}



export default app;