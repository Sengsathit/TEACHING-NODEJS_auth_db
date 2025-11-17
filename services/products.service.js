import { dbConnection } from "../db/database.js";

export default class ProductsService {

    async getAllProducts() {
        const db = await dbConnection;
        return db.all("SELECT * FROM products");
    }

    async getProductById(id) {
        const db = await dbConnection;

        const product = await db.get(
            "SELECT * FROM products WHERE id = ?",
            [id]
        );

        if (!product) {
            throw new Error("NOT_FOUND");
        }

        return product;
    }

    async deleteProduct(id) {
        const db = await dbConnection;

        try {
            await db.exec("BEGIN TRANSACTION");

            const result = await db.run(
                "DELETE FROM products WHERE id = ?",
                [id]
            );

            if (result.changes === 0) {
                throw new Error("NOT_FOUND");
            }

            await db.exec("COMMIT");

        } catch (err) {
            await db.exec("ROLLBACK");
            throw err;
        }
    }
}