import express from "express";
import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import products from "./data/products.js";

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products", function (req, res) {
  res.json(products);
});

app.get("/api/products/:id", function (req, res) {
  // console.log(products);
  const product = products.find((p) => req.params.id == p._id);

  if (product) {
    res.json(product);
  }
});

app.listen(port, () =>
  console.log(` Server running on port ${port} `.blue.inverse)
);
