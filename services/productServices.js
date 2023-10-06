const { prisma } = require('../config/prisma')

const getProductsService = async () => {
    const products = await prisma.product.findMany()
    if (products.length === 0) {
        return {
            message: "Belum ada produk yang dibuat"
        }
    }
    return products
}

const getProductByIdService = async (id) => {
    const product = await prisma.product.findMany({
        where: {
            id: Number(id)
        }
    })
    return product
}

const createProductService = async (body) => {
    const { nama, harga, deskripsi, gambar } = body;
    console.log(body);
    // todo setelah ngambil data dari request body, simpan ke database

    const createdProduct = await prisma.product.create({
        data: {
            nama,
            harga: Number(harga),
            deskripsi,
            gambar
        }
    })

    return createdProduct
}

module.exports = { getProductsService, getProductByIdService, createProductService }