import Products from "../models/productModel.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll()
        res.json(products)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
}