const {serverLog} = require('../utils');

const fields = require('../db/fields.json');

const getFields = (req, res, next) => {
    serverLog(" Get request for fields received.");
    res.json(fields);
}

module.exports = { getFields };