import ships from "../modules/ships";

const carrier = ships(5);

test(' Get length of ship' , () => {
    expect(carrier.getLength()).toBe(5);
});
test('Hit on the ship', () => {
    expect(carrier.hit()).toBe(1);
});
test('Hit on the ship', () => {
    expect(carrier.hit()).toBe(2);
});
test('Check if the ship has sunk', () => {
    expect(carrier.isSunk()).toBe(false);
});
test('Hit on the ship', () => {
    expect(carrier.hit()).toBe(3);
});
test('Hit on the ship', () => {
    expect(carrier.hit()).toBe(4);
});
test('Hit on the ship', () => {
    expect(carrier.hit()).toBe(5);
});
test('Check if the ship has sunk', () => {
    expect(carrier.isSunk()).toBe(true);
});