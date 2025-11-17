import ProductsController from "../controllers/products.controller.js";
import { requireRole, requireToken } from "../middlewares/auth.middleware.js";
import { requireApiKey } from "../middlewares/apikey.middleware.js";
import { Router } from "express";

export default class ProductsRoutes {
    constructor() {
        this.productsController = new ProductsController();
        this.router = Router();
        this.loadRoutes();
    }

    loadRoutes() {

        this.router.get(
            "/",
            requireApiKey,
            (req, res) => {
                this.productsController.getProducts(req, res);
            }
        );

        this.router.get(
            "/:id",
            requireToken,
            (req, res) => {
                this.productsController.getProductById(req, res);
            }
        );

        this.router.delete(
            "/:id",
            requireToken,
            requireRole("admin"),
            (req, res) => {
                this.productsController.removeProduct(req, res);
            }
        );
    }
}