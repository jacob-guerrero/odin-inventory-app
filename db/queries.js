const pool = require("./pool");

// Category queries
async function getAllCategories() {
  const { rows } = await pool.query(
    "SELECT * FROM categories ORDER BY id ASC;"
  );
  return rows;
}

async function getCategoryById(categoryId) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1;", [
    categoryId,
  ]);
  return rows[0];
}

async function createCategory(name, description) {
  const { rows } = await pool.query(
    "INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *;",
    [name, description]
  );
  return rows[0];
}

async function updateCategory(categoryId, name, description) {
  await pool.query(
    "UPDATE categories SET name = $1, description = $2 WHERE id = $3;",
    [name, description, categoryId]
  );
}

async function deleteCategory(categoryId) {
  await pool.query("DELETE FROM categories WHERE id = $1;", [categoryId]);
}

// Item queries
async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items ORDER BY id ASC;");
  return rows;
}

async function getItemsByCategory(categoryId) {
  const { rows } = await pool.query(
    "SELECT * FROM items WHERE category_id = $1;",
    [categoryId]
  );
  return rows;
}

async function getItemById(itemId) {
  const { rows } = await pool.query("SELECT * FROM items WHERE id = $1;", [
    itemId,
  ]);
  return rows[0];
}

async function createItem(name, categoryId, price, stockQuantity, description) {
  const { rows } = await pool.query(
    "INSERT INTO items (name, category_id, price, stock_quantity, description) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
    [name, categoryId, price, stockQuantity, description]
  );
  return rows[0];
}

async function updateItem(
  itemId,
  name,
  categoryId,
  price,
  stockQuantity,
  description
) {
  await pool.query(
    "UPDATE items SET name = $1, category_id = $2, price = $3, stock_quantity = $4, description = $5 WHERE id = $6;",
    [name, categoryId, price, stockQuantity, description, itemId]
  );
}

async function deleteItem(itemId) {
  await pool.query("DELETE FROM items WHERE id = $1;", [itemId]);
}

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getAllItems,
  getItemsByCategory,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
