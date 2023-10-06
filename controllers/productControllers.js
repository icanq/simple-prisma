const { getProductsService, getProductByIdService, createProductService } = require('../services/productServices')

const getProductController = async (req, res) => {
    const products = await getProductsService()
    res.status(200).json(products)
}

const getProductByIdController = async (req, res) => {
    const product = await getProductByIdService(req.params.id)
    if (!product || product.length === 0) {
        res.status(404).json({
            message: "Product tidak ditemukan"
        })
    }
    res.status(200).json(product)
}

const createProductController = async (req, res) => {
    const createdProduct = await createProductService(req.body)
    if (!createdProduct) {
        res.status(400).json({
            message: "Product gagal dibuat"
        })
    }
    res.status(201).json({
        message: "Product berhasil dibuat",
        data: createdProduct
    })
}

module.exports = {
    getProductController,
    getProductByIdController,
    createProductController
}