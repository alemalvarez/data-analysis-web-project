const {serverLog} = require('../utils.js');
const fs = require('fs');

const sales = require('../db/db.json'); //Change to exampledb.json if needed.
const fields = require('../db/fields.json'); //Change to examplefields.json if needed.



const getSales = (req, res, next) => {
    serverLog(" Get request for sales received.");
    res.json(sales);
}

const newSale = (req, res, next) => {
    serverLog(" New sale request received.");
    sales.push(req.body);
    console.log(sales);
    res.status(201).send("New sale added!");
}

module.exports = { getSales , newSale };