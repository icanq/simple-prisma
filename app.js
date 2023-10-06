require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const { productRoutes } = require('./routes/productRoutes');

app.use(cors()); // untuk mengaktifkan cors, agar API bisa diakses dari luar atau dari frontend
app.use(express.json()) // parse request body dari JSON ke Object
app.use(express.urlencoded({ extended: true })) // parse request body dari x-www-form-urlencoded ke Object


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// rute untuk product
app.use("/products", productRoutes)

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});