const { Router } = require("express");
const {
  getAllItems,
  getItemDetails,
  createItemGet,
  createItemPost,
  updateItemGet,
  updateItemPost,
  deleteItem,
} = require("../controllers/itemsController");

const itemRouter = Router();

// GET all items
itemRouter.get("/", getAllItems);

// GET specific item details
itemRouter.get("/:id", getItemDetails);

// GET form to create a new item
itemRouter.get("/create", createItemGet);

// POST request to create a new item
itemRouter.post("/create", createItemPost);

// GET form to update an existing item
itemRouter.get("/edit/:id", updateItemGet);

// POST request to update an existing item
itemRouter.post("/edit/:id", updateItemPost);

// POST request to delete an item
itemRouter.post("/delete/:id", deleteItem);

module.exports = itemRouter;
