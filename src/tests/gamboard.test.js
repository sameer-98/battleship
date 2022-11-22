import Gameboard from '../modules/gameboard'

const gameboard = new Gameboard();

// Checking correct placement by expecting the last position to not return null
test('Correct placement of ship objects', () => {
    expect(gameboard.placeShips(5, true, 0, 0)).not.toBe(null)
});

// test('Correct placement of ship objects', () => {
//     expect(gameboard.placeShips(5, false, 0, 5)).not.toBe(null)
// });

// test('Correct placement of ship objects', () => {
//     expect(gameboard.placeShips(3, true, 4, 4)).not.toBe(null)
// });

// test('Check whether the location is already occupied', () => {
//     expect(gameboard.isPlacementPossible(4,true, 0,0)).toBe(false)
// });
// test('Check whether the location is going out of bounds horizontally', () => {
//     expect(gameboard.isPlacementPossible(4,false, 9,9)).toBe(false)
// });
// test('Check whether the location is going out of bounds vertically', () => {
//     expect(gameboard.isPlacementPossible(4,true, 9,9)).toBe(false)
// });
// test('Check whether the location is going out of bounds vertically', () => {
//     expect(gameboard.isPlacementPossible(4,true, 9,0)).toBe(false)
// });
// test('Check whether the location is occupied', () => {
//     expect(gameboard.isPlacementPossible(4,true, 0,9)).toBe(false)
// });
// test('Check whether the location is occupied', () => {
//     expect(gameboard.isPlacementPossible(4,false, 0,9)).toBe(false)
// });
// test('Check whether the location is already occupied', () => {
//     expect(gameboard.isPlacementPossible(5,true, 0,4)).toBe(false)
// });
// test('Check whether the location is already occupied', () => {
//     expect(gameboard.isPlacementPossible(2,false, 0,6)).toBe(false)
// });

// Tests for receive attack function
test('receive attack', () => {
    expect(gameboard.receiveAttacks(0,0)).toBe(1)
});
test('receive attack', () => {
    expect(gameboard.receiveAttacks(1,0)).toBe(2)
});
test('receive attack', () => {
    expect(gameboard.receiveAttacks(2,0)).toBe(3)
});
test('receive attack', () => {
    expect(gameboard.receiveAttacks(3,0)).toBe(4)
});
test('receive attack', () => {
    expect(gameboard.receiveAttacks(4,0)).toBe(5)
});

// test whether all ships have sunk
test('All ships sunk', () => {
    expect(gameboard.shipsSunk()).toBe(true);
})