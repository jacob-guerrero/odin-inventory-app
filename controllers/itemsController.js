const db = require("../db/queries");

async function getAllItems(req, res) {
  try {
    const items = await db.getAllItems();
    res.render("items/index", { items });
  } catch (err) {
    console.error("Error fetching items:", err);
    res.status(500).send("Server Error");
  }
}

async function getItemDetails(req, res) {
  const { id } = req.params;
  try {
    const item = await db.getItemById(id);
    const categoryId = item.category_id;
    const category = await db.getCategoryById(categoryId);
    res.render("items/show", { item, category });
  } catch (err) {
    console.error("Error fetching item details:", err);
    res.status(500).send("Server Error");
  }
}

async function createItemGet(req, res) {
  // Render the form to create a new item
  const categories = await db.getAllCategories();
  res.render("items/form", { item: null, categories });
}

async function createItemPost(req, res) {
  const { name, categoryId, price, stockQuantity, description } = req.body;
  try {
    await db.createItem(name, categoryId, price, stockQuantity, description);
    res.redirect("/items");
  } catch (err) {
    console.error("Error creating item:", err);
    res.status(500).send("Server Error");
  }
}

async function updateItemGet(req, res) {
  const { id } = req.params;
  try {
    const item = await db.getItemById(id);
    const categories = await db.getAllCategories();
    res.render("items/form", { item, categories });
  } catch (err) {
    console.error("Error fetching item for editing:", err);
    res.status(500).send("Server Error");
  }
}

async function updateItemPost(req, res) {
  const { id } = req.params;
  const { name, categoryId, price, stockQuantity, description } = req.body;
  try {
    await db.updateItem(
      id,
      name,
      categoryId,
      price,
      stockQuantity,
      description
    );
    res.redirect("/items");
  } catch (err) {
    console.error("Error updating item:", err);
    res.status(500).send("Server Error");
  }
}

async function deleteItem(req, res) {
  const { id } = req.params;
  try {
    await db.deleteItem(id);
    res.redirect("/items");
  } catch (err) {
    console.error("Error deleting item:", err);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  getAllItems,
  getItemDetails,
  createItemGet,
  createItemPost,
  updateItemGet,
  updateItemPost,
  deleteItem,
};
