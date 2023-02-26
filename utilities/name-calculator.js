const calculateName = (receipt) => {
    let points = 0;
    const retailerName = receipt.retailer;
    points += retailerName.replace(/[^a-zA-Z0-9]/g, "").length;
    return points;
};

module.exports = calculateName;