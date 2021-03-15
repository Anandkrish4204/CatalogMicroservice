const express = require('express');
const adminController = require('../controller/admin');

const route = express.Router();

route.post("/products",adminController.addProducts);
route.get("/products",adminController.getAllProducts);
route.get("/products/:productId",adminController.filterById);

module.exports = route;