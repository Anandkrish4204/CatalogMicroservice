const express = require('express');
const consumerController = require('../controller/consumer');

const route = express.Router();

route.get("/products",consumerController.getAllProducts);

module.exports = route;