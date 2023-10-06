const express = require('express');
const productRoutes = express.Router();
const { prisma } = require('../config/prisma');
const { getProductController, getProductByIdController, createProductController } = require('../controllers/productControllers');

productRoutes.get('/', getProductController)

productRoutes.post('/', createProductController)

productRoutes.get("/:id", getProductByIdController)

module.exports = { productRoutes }