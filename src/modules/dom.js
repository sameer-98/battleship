const UI = () => {

    const SIZE = 10;

    // helper function to create a square
    const createSquare = (row, col) => {
        const square = document.createElement('button');
        square.classList.add('btn','btn-outline-primary','p-4','col');
        square.setAttribute('data-row', String(row));
        square.setAttribute('data-col', String(col));
        return square;
    }

    //create the game boards for each player
    const renderBoard = (id) => {
        const playerElement = document.getElementById(id);
        const board = document.createElement('div');
        board.classList.add('container', 'border', 'border-5', 'border-primary');

        for (let i = 0; i < SIZE; i++){
            const row = document.createElement('div');
            row.classList.add('row')
            for (let j = 0; j < SIZE; j++){
                const square = createSquare(i, j);
                row.appendChild(square);
            }
            board.appendChild(row);
        }
        playerElement.appendChild(board);
    
    }

    return { renderBoard };
}
export default UI
