import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoute from "./routes/productRoutes.js";

const port = process.env.PORT;

connectDB(); // connects to MongoDB

const app = express();

// Body parser middleware
app.use(express.json()); // Note: parses data (e.g. form data) in json payload (format)
app.use(express.urlencoded({ extended: true })); // Note: encodes data in a format that is accepted or readable under http protocol, before sending over http

// Note: app.use is an express routing method, used in place of app.get.
// Note: Anytime the specified route (/api/products) is hit, it looks into the corresponding route file (productRoutes).
// Note: And then, it prefix (adds) the route to all the routes in the file, and serve the appropriate response.
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(` Server running on port ${port} `.blue.inverse)
);
