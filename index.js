import express from 'express';
import dotenv from 'dotenv';
import ProductsRoutes from './routes/products.routes.js';
import AuthRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const productsRoutes = new ProductsRoutes();
app.use('/products', productsRoutes.router);

const authRoutes = new AuthRoutes();
app.use('/auth', authRoutes.router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});