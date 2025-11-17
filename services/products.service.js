import fs from "fs";

export default class ProductsService {

    constructor() {
        const fileUrl = new URL("./mocks/products.json", import.meta.url);

        this.products = JSON.parse(
            fs.readFileSync(fileUrl, "utf8")
        );
    }

    async getAllProducts() {
        return this.products;
    }

    async getProductById(id) {
        const product = this.products.find(product => product.id == id);
        if (!product) {
            throw (Error("NOT_FOUND"));
        }
        return product;
    }

    async deleteProduct(id) {
        const product = this.products.find(product => product.id == id);
        if (!product) {
            throw (Error("NOT_FOUND"));
        }

        // Handle product deletion
    }
}