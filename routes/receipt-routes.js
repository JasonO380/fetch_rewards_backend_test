const express = require("express");
const receiptControllers = require("../controllers/receipt-controllers");
const router = express.Router();

router.post("/process", receiptControllers.addReceipt);

router.get("/:rid/points", receiptControllers.receiptPoints);

module.exports = router;