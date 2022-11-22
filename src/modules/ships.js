const ships = (size) => {
    
    let hits = 0;

    // Returning size of ship
    const getLength = () => size;
 
    // Indicate the hit on the ship
    const hit = () =>  ++hits;

    const isSunk = () =>  hits === size;

    return { getLength, hit, isSunk }
    
}
export default ships;
module.exports = ships;