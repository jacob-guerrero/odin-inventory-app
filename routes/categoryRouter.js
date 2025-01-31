const { Router } = require("express");
const {
  getAllCategories,
  getCategoryDetails,
  createCategoryGet,
  createCategoryPost,
  updateCategoryGet,
  updateCategoryPost,
  deleteCategory,
} = require("../controllers/categoriesController");

const categoryRouter = Router();

// GET all categories
categoryRouter.get("/", getAllCategories);

// GET form to create a new category
categoryRouter.get("/create", createCategoryGet);

// POST request to create a new category
categoryRouter.post("/create", createCategoryPost);

// GET category details (including items in the category)
categoryRouter.get("/:id", getCategoryDetails);

// GET form to update an existing category
categoryRouter.get("/edit/:id", updateCategoryGet);

// POST request to update an existing category
categoryRouter.post("/edit/:id", updateCategoryPost);

// POST request to delete a category
categoryRouter.post("/delete/:id", deleteCategory);

module.exports = categoryRouter;
