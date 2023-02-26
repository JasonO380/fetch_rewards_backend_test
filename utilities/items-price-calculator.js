const calculatePrice = (receipt) => {
    let points = 0;
    receipt.items.forEach((item) => {
        const descriptionLength = item.shortDescription.trim().length;
        if (descriptionLength % 3 === 0) {
            const price = item.price;
            const itemPoints = Math.ceil(price * 0.2);
            points += itemPoints;
        }
    });
    return points;
};

module.exports = calculatePrice;