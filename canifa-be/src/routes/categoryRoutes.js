import { Router } from "express";
import { createCategory, getAllCategories, getCategoryById, removeCategoryById, updateCategoryById } from "../controllers/categoryController.js";
import { validBodyRequest } from "../middlewares/validBodyRequest.js";
import { categorySchema } from "../validSchema/categorySchema.js";
import { checkAuth } from "../middlewares/checkAuth.js";
import { checkAdmin } from "../middlewares/checkAdmin.js";

const categoryRoutes = Router();

categoryRoutes.get("/", getAllCategories);
categoryRoutes.get("/:id", getCategoryById);

categoryRoutes.use("/", checkAuth, checkAdmin);
categoryRoutes.post("/", validBodyRequest(categorySchema), createCategory);
categoryRoutes.patch("/:id", validBodyRequest(categorySchema), updateCategoryById);
categoryRoutes.delete("/:id", removeCategoryById);

export default categoryRoutes;