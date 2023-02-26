const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const receiptRoutes = require("./routes/receipt-routes");
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    next();
});

app.use("/receipts", receiptRoutes);

app.listen(5000, () => {
    console.log("Server started on port 5000");
});