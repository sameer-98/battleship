import player from "./player";
import UI from "./dom";

const app = () => {

    const player1 = player('Sameer');
    const player2 = player('AI');
    
    
    // place ships randomly and get the boards
    const board1 = player1.board.placeShipsRandomly();
    const board2 = player2.board.placeShipsRandomly();

    console.table(board1);
    console.table(board2);
    
    // render the boards
    UI().renderBoard('player1');
    UI().renderBoard('player2');

    // show users pieces
    
}



export default app;