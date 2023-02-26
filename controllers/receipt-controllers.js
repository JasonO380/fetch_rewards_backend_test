const uuid = require("uuid");
const calculateName = require("../utilities/name-calculator");
const calculatePair = require("../utilities/items-pair-calculator");
const calculatePrice = require("../utilities/items-price-calculator");
const calculateDate = require("../utilities/date-calculator");
const calculateTime = require("../utilities/time-calculator");
const calculateTotal = require("../utilities/total-calculator");

let receipts = [];
const addReceipt = async (req, res, next) => {
    const id = uuid.v4();
    const { retailer, purchaseDate, purchaseTime, total, items } = req.body;
    const receiptData = {
        id: id,
        retailer: retailer,
        purchaseDate: purchaseDate,
        purchaseTime: purchaseTime,
        total: total,
        items: [],
    };
    if (!retailer || !purchaseDate || !purchaseTime || !total || !items) {
        return res.status(400).json({ message: "The receipt is invalid" });
    }

    for (i of items) {
        receiptData.items.push(i);
    }

    receipts.push(receiptData);
    res.status(200).json({ id: receiptData.id });
};

const receiptPoints = async (req, res, next) => {
    const rid = req.params.rid;
    const receipt = receipts.find((receipt) => receipt.id === rid);

    if (!receipt) {
        return res.status(404).json({ message: "No receipt found for that id" });
    }

    const name = calculateName(receipt);
    const pair = calculatePair(receipt);
    const price = calculatePrice(receipt);
    const date = calculateDate(receipt);
    const time = calculateTime(receipt);
    const total = calculateTotal(receipt);

    const points = name + pair + price + date + time + total;

    res.status(200).json({ points: points });
};

exports.addReceipt = addReceipt;
exports.receiptPoints = receiptPoints;