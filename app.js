const express = require("express");
const path = require("node:path");
const app = express();

/* Import Routes */
const categoryRouter = require("./routes/categoryRouter");

/* Styles */
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

/* Parse form data */
app.use(express.urlencoded({ extended: true }));

/* Views */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* Port */
const PORT = process.env.PORT || 3000;

/* Routes */
app.use("/categories", categoryRouter);

app.get("/", (req, res) => res.render("home"));

/* Error */
app.use((req, res) => {
  res.status(404).render("error", { message: "Page Not Found" });
});

/* Start App */
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
