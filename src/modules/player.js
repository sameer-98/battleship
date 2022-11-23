import Gameboard from "./gameboard";

const player = (name) => {
    const attackPosition = new Set();

    const getName = () => name;
    
    const board = new Gameboard();

    const attack = (enemy, row, col) => {       // returns undefined if already attacked at that position
        if (!attackPosition.has([row, col])){
            attackPosition.add([row, col]);
            return enemy.receiveAttacks(row, col);
        }
    }                       

    return { board, getName, attack };
}

export default player
module.exports = player