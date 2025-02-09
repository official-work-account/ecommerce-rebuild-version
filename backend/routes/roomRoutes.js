import express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productControllers.js";
const router = express.Router();

// Note: productRoutes file (this file) contains all routes that hit the /api/products routes, at the backend.
// Note: this file is connected with server.js, so that it picks the route path.
// Note: router.route is an express router method, used in place of app.get or app.post.
// Note: "/api/products" is prefixed to all "/" routes in this file, to determine the route to be opened, and response to serve.
router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
