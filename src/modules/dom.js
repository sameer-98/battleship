const UI = () => {

    const SIZE = 10;

    let hasAttacked = false;

    const setHasAttack = (bool) => {
        hasAttacked = bool;
    }

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
                        let attackSuccessful = player.gameboard.receiveAttacks(row, col); 
                        (attackSuccessful) ? renderHit('player2', row, col) : renderMiss('player2', row, col);
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
        const player = document.getElementById(id);
        const button = player.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        button.style.backgroundColor = 'red';
    }
    function renderHit(id, row, col){
        const player = document.getElementById(id);
        const button = player.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        button.style.backgroundColor = 'green';
    }
    

    return { renderBoard, hasAttacked, renderMiss, renderHit, setHasAttack };
}
export default UI
