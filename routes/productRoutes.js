const express = require('express');
const productRoutes = express.Router();
const { prisma } = require('../config/prisma');
const { getProductController } = require('../controllers/productControllers');

productRoutes.get('/', getProductController)

productRoutes.post('/', async (req, res) => {
    const { nama, harga, deskripsi, gambar } = req.body;
    console.log(req.body);
    // todo setelah ngambil data dari request body, simpan ke database

    const createdProduct = await prisma.product.create({
        data: {
            nama,
            harga: Number(harga),
            deskripsi,
            gambar
        }
    })
    res.status(201).json({
        message: "Product berhasil dibuat",
        data: createdProduct
    })
})

module.exports = { productRoutes }