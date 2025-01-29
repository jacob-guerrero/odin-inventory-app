const db = require("../db/queries");

async function getAllCategories(req, res) {
  try {
    const categories = await db.getAllCategories();
    res.render("categories/index", { categories });
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).send("Server Error");
  }
}

async function getCategoryDetails(req, res) {
  const { id } = req.params;
  try {
    const category = await db.getCategoryById(id);
    const items = await db.getItemsByCategory(id); // Get all items in this category
    res.render("categories/show", { category, items });
  } catch (err) {
    console.error("Error fetching category details:", err);
    res.status(500).send("Server Error");
  }
}

async function createCategoryGet(req, res) {
  // Render the form to create a new category
  res.render("categories/form", { category: null });
}

async function createCategoryPost(req, res) {
  const { name, description } = req.body;
  try {
    await db.createCategory(name, description);
    res.redirect("/categories");
  } catch (err) {
    console.error("Error creating category:", err);
    res.status(500).send("Server Error");
  }
}

async function updateCategoryGet(req, res) {
  const { id } = req.params;
  try {
    const category = await db.getCategoryById(id);
    res.render("categories/form", { category });
  } catch (err) {
    console.error("Error fetching category for editing:", err);
    res.status(500).send("Server Error");
  }
}

async function updateCategoryPost(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    await db.updateCategory(id, name, description);
    res.redirect("/categories");
  } catch (err) {
    console.error("Error updating category:", err);
    res.status(500).send("Server Error");
  }
}

async function deleteCategory(req, res) {
  const { id } = req.params;
  try {
    await db.deleteCategory(id);
    res.redirect("/categories");
  } catch (err) {
    console.error("Error deleting category:", err);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  getAllCategories,
  getCategoryDetails,
  createCategoryGet,
  createCategoryPost,
  updateCategoryGet,
  updateCategoryPost,
  deleteCategory
};
