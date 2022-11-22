import Gameboard from '../modules/gameboard'

const gameboard = new Gameboard();

// Checking correct placement by expecting the last position to not return null
test('Correct placement of ship objects', () => {
    expect(gameboard.placeShips(5, true, 0, 0)).not.toBe(null)
});

test('Correct placement of ship objects', () => {
    expect(gameboard.placeShips(5, false, 0, 5)).not.toBe(null)
});

test('Correct placement of ship objects', () => {
    expect(gameboard.placeShips(3, true, 4, 4)).not.toBe(null)
});

test('Check whether the location is already occupied', () => {
    expect(gameboard.isPlacementPossible(4,true, 0,0)).toBe(false)
});