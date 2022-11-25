import Gameboard from "./gameboard";

const player = (name) => {
    const attackPosition = new Set();

    const getName = () => name;
    
    const gameboard = new Gameboard();

    const attack = (enemy, row, col) => {       // returns undefined if already attacked at that position
        if (!attackPosition.has([row, col])){
            attackPosition.add([row, col]);
            return enemy.receiveAttacks(row, col);
        }
    }

    const attackRandomly = (player) => {
        let x = Math.floor((Math.random() * 10));
        let y = Math.floor((Math.random() * 10));

        let status = attack(player, x, y);
        return { status, x, y}
    }
                          

    return { gameboard, getName, attack, attackRandomly };
}

export default player
//module.exports = player