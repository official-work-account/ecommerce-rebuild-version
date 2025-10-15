import asyncHandler from "../middleware/asyncHandler.js";
// import Order from "../models/orderModel.js";
// import products from "../data/products.js"; // temporary usage

// NOTE:
// @desc            create new order
// @route           POST /api/orders
// @access          Private
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});

// NOTE:
// @desc            get logged in user orders
// @route           GET /api/orders/myorders
// @access          Private
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("my orders");
});

// NOTE:
// @desc            get order by ID
// @route           GET /api/orders/:id
// @access          Private
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// NOTE:
// @desc            update order to paid
// @route           POST /api/orders/:id/pay
// @access          Private
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order to paid");
});

// NOTE:
// @desc            update order to delivered
// @route           POST /api/orders/:id/deliver
// @access          Private/Admin
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update order to delivered");
});

// NOTE:
// @desc            Get all orders
// @route           POST /api/orders
// @access          Private/Admin
// asyncHandler:    allows us to avoid using try/catch block for async functions (async functions returns a promise).
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
