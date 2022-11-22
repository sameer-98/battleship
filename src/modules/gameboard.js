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
    placeShips(length, isVertical, row, col){
        // Create a ship object and associate each of the square spanning the length of the ship with that object
        // first check if the placement is possible

        if (!this.isPlacementPossible(length, isVertical, row, col)) return;
        const ship = ships(length);
        this.ships.push(ship);
        if (isVertical){
            for (let i = row; i < (row + length); i++){
                this.board[i][col] = ship;
            }
            return this.board[row + (length - 1)][col] ;  // TODO: When doing DOM manipulation return board to be rendered
        }
        for (let j = col; j < (col + length); j++){
            this.board[row][j] = ship;
        }
        return this.board[row][col + (length - 1)];

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
    isEmpty(){

    }
    receiveAttacks(row, col){
        if (this.board[row][col] !== null){
            this.board[row][col].hit()
        }
        else {
            this.missedAttack[row][col] = true;
        }
        return this.board[row][col].getHits(); // TODO: return ship object to show the damage 
    }
    shipsSunk(){
        return this.ships.every(ship => ship.isSunk());
    }
}
const gameboard = new Gameboard();
gameboard.placeShips(5,true, 0, 0);
gameboard.placeShips(5,false, 0, 5);
gameboard.placeShips(3, true, 4, 4);
console.table(gameboard.board);
module.exports = Gameboard;
