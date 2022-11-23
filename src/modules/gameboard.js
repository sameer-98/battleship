import ships from "./ships";

const SIZE = 10;

class Gameboard {
    constructor(){
        this.board = [];
        this.missedAttack = [];
        this.createBoard();
        this.ships = [];
    }
    // Create the game board 
    createBoard(){
        for (let i = 0; i < SIZE; i++){
            this.board[i] = [];
            this.missedAttack[i] = [];
            for (let j = 0; j < SIZE; j++){
                this.board[i][j] = null;
                this.missedAttack[i][j] = false;
            }
        }
    }
    placeShips(ship, length, isVertical, row, col){
        // Create a ship object and associate each of the square spanning the length of the ship with that object
        // first check if the placement is possible

        if (!this.isPlacementPossible(length, isVertical, row, col)) return false;
        if (isVertical){
            for (let i = row; i < (row + length); i++){
                this.board[i][col] = ship;
            }
            return true  // TODO: When doing DOM manipulation return board to be rendered
        }
        for (let j = col; j < (col + length); j++){
            this.board[row][j] = ship;
        }
        return true;

    }
    isPlacementPossible(length, isVertical, row, col){
        
        // Check in the horizontal direction if going out of board
        if ((col < 0 || (col + (length - 1) > SIZE - 1) || (col > SIZE - 1)) && !isVertical){
            return false
        }
        // Check in the vertical direction if going out of board
       if (isVertical && (row < 0 || (row + (length - 1) > SIZE - 1) || (row > SIZE - 1))){
        return false
       }
      
        // Any of the field is already taken
        if (this.board[row][col] !== null){
            return false
        }    

        // Any of the neighbor fields are taken
        if (isVertical){
            for (let i = row; i < (row + length); i++){
                if (this.board[i][col] !== null) return false
            }
        }
        else{
            for (let j = col; j < (col + length); j++){
                if(this.board[row][j] !== null) return false
            }
        }
        return true;
    }
    
    receiveAttacks(row, col){   // Function returns true if the attack hits ship and false if doesn't
        if (this.board[row][col] !== null){
            this.board[row][col].hit()
            return true;
        }
        else {
            this.missedAttack[row][col] = true;
        }
        return false;
    }
    shipsSunk(){    // Function return true if all the ships on the board have sunk else false
        return this.ships.every(ship => ship.isSunk());
    }

    placeShipsRandomly(){
        const carrier = ships(5);
        const battleship = ships(4);
        const destroyer = ships(3);
        const submarine = ships(3);
        const patrol = ships(2);

        this.ships.push(carrier, battleship, destroyer, submarine, patrol);

        let isSuccessfulPlacement = 0;
        while (isSuccessfulPlacement < 5){
            const ship = this.ships[isSuccessfulPlacement];
            let x = Math.floor((Math.random() * 10) + 1);
            let y = Math.floor((Math.random() * 10) + 1);
            let  length = ship.getLength();
            let isVertical = (Math.round(Math.random()) === 0) ? false : true; // 0 -> false, 1 -> true
            if (this.placeShips(ship, length, isVertical, x, y)){
                isSuccessfulPlacement++;
            } 
        }
        return this.board;
    }
}
const playerBoard = new Gameboard();
console.table(playerBoard.placeShipsRandomly());

export default Gameboard;
module.exports = Gameboard;
