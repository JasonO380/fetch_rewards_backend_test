const calculateTotal = (receipt) => {
    let points = 0;
    const total = receipt.total;

    if (total % 1 === 0) {
        points += 50;
    }

    if (total % 0.25 === 0) {
        points += 25;
    }

    return points;
};

module.exports = calculateTotal;