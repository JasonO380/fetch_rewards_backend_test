const calculatePair = (receipt) => {
    let points = 0;
    const numItems = receipt.items.length;
    points += Math.floor(numItems / 2) * 5;
    return points;
};

module.exports = calculatePair;