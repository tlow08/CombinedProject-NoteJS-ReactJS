import { Router } from "express";
import { createProduct, getAllProducts, getProductById, removeProductById, updateProductById } from "../controllers/productController.js";
import { validBodyRequest } from "../middlewares/validBodyRequest.js";
import { productSchema } from '../validSchema/productSchema.js';
import { checkAdmin } from "../middlewares/checkAdmin.js";
import { checkAuth } from "../middlewares/checkAuth.js";


const productRouter =  Router();


productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);

productRouter.use("/",checkAuth, checkAdmin);
productRouter.post("/", validBodyRequest(productSchema), createProduct);
productRouter.patch("/:id",validBodyRequest(productSchema), updateProductById);
productRouter.delete("/:id", removeProductById);


export default productRouter;