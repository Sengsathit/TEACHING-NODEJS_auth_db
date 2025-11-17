import ProductsService from "../services/products.service.js";

export default class ProductsController {
    constructor() {
        this.productsService = new ProductsService();
    }

    async getProducts(req, res) {
        try {
            const products = await this.productsService.getAllProducts();
            res.status(200).json(products).send();
        } catch (error) {
            res.status(500).json({ error: "Failed to fetch products" }).send();
        }
    }

    async getProductById(req, res) {
        try {
            const id = await this.productsService.deleteProduct(req.params.id);
            const product = await this.productsService.getProductById(id);
            res.status(200).json(product).send();
        } catch (error) {
            res.status(500).json({ error: `Failed to get product : ${req.params.id}` }).send();
        }
    }


    async removeProduct(req, res) {
        try {
            const id = await this.productsService.deleteProduct(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: `Failed to get product : ${req.params.id}` }).send();
        }
    }
}