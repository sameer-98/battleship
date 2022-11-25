const UI = () => {

    const SIZE = 10;

    let hasAttacked = false;

    // helper function to create a square
    const createSquare = (row, col) => {
        const square = document.createElement('button');
        square.classList.add('btn','btn-outline-primary','p-4','col');
        square.setAttribute('data-row', row);
        square.setAttribute('data-col', col);
        return square;
    }

    //create the game boards for each player
    const renderBoard = (id, player) => {
        const playerElement = document.getElementById(id);
        const userBoard = player.gameboard.board;
        const board = document.createElement('div');
        board.classList.add('container', 'border', 'border-5', 'border-primary');

        for (let i = 0; i < SIZE; i++){
            const row = document.createElement('div');
            row.classList.add('row')
            for (let j = 0; j < SIZE; j++){
                const square = createSquare(i, j);
                if (id === 'player1' && userBoard[i][j] !== null){
                    square.style.backgroundColor = 'grey';
                    square.style.pointerEvents = 'none';
                }
                if (id === 'player2'){
                    square.addEventListener('click', (e) => {
                        let row = e.target.dataset.row;
                        let col = e.target.dataset.col;
                        if (userBoard[row][col] === null){
                            square.style.backgroundColor = 'red';
                        }
                        else{
                            square.style.backgroundColor = 'green';
                        }
                        player.gameboard.receiveAttacks(row, col); // refractor code to remove redundant if stats, receiveAttacks already return true/false
                        square.style.pointerEvents = 'none';
                        hasAttacked = true;                     
                    });
                }
                row.appendChild(square);
            }
            board.appendChild(row);
        }
        playerElement.appendChild(board);
    
    }
    function renderMiss (id, row, col){

    }
    function renderHit(){

    }
    

    return { renderBoard, hasAttacked, renderMiss, renderHit };
}
export default UI
