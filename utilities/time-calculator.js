const calculateTime = (receipt) => {
    let points = 0;
    const purchaseTime = receipt.purchaseTime;
    const twoPM = "14:00";
    const fourPM = "16:00";
    if (purchaseTime >= twoPM && purchaseTime <= fourPM) {
        points += 10;
    }

    return points;
};

module.exports = calculateTime;