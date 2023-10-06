const { getProductsService } = require('../services/productServices')

const getProductController = async (req, res) => {
    const products = await getProductsService()
    res.status(200).json(products)
}

module.exports = {
    getProductController
}