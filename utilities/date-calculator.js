const calculateDate = (receipt) => {
    let points = 0;
    const [year, month, day] = receipt.purchaseDate.split("-");
    const purchaseDate = new Date(year, month, day);
    const purchaseDay = purchaseDate.getDate();
    if (purchaseDay % 2 === 1) {
        points += 6;
    }
    return points;
};

module.exports = calculateDate;