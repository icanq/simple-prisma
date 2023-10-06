const { prisma } = require('../config/prisma')

const getProductController = async (req, res) => {
    const products = await prisma.product.findMany();
    res.status(200).json(products)
}

module.exports = {
    getProductController
}