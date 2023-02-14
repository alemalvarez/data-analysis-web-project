const express = require('express');
const cors = require('cors');
require('dotenv').config({path:'./config.env'});

const {serverLog} = require('./utils');

const server = express();

server.use(cors());
server.use(express.json());

const port = process.env.PORT || 5001;

const saleRoutes = require('./routers/sales');
server.use('/', saleRoutes);

server.listen(port, () => {
    serverLog("App running in port " + port);
});



