import player from "./player";
import UI from "./dom";

const display = UI();
const app = () => {

    const init = () => {
        const player1 = player('Sameer');
        const player2 = player('AI');
        const players = new Array();
        players.push(player1,player2);

        // place ships randomly and get the boards
        const board1 = player1.gameboard.placeShipsRandomly();
        const board2 = player2.gameboard.placeShipsRandomly();

        console.table(board1);
        console.table(board2);

        // render the boards and attach event listeners
        display.renderBoard('player1', player1, players);
        display.renderBoard('player2', player2, players);
    
    }
    
    const gameLoop = (players) => {
        if (players[0].gameboard.shipsSunk() || players[1].gameboard.shipsSunk()){
            display.displayResult(players[0], players[1]);
            return;
        }
        const banner = document.querySelector('.blinking');
        banner.textContent = "PC's turn";
        let attack = players[0].attackRandomly();
        setTimeout(() =>{
            (attack.status) ? display.renderAttack('hit','player1', attack.x, attack.y): display.renderAttack('miss','player1', attack.x, attack.y);
            (players[0].gameboard.shipsSunk() || players[1].gameboard.shipsSunk()) ? display.displayResult(players[0], players[1]): banner.textContent = 'Your Turn';
        },1000)

    }
    
    return { gameLoop, init }
    
}

export default app;