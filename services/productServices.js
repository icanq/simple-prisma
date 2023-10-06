const { prisma } = require('../config/prisma')

const getProductsService = async () => {
    const products = await prisma.product.findMany()
    console.log(products)
    return products
}

module.exports = { getProductsService }