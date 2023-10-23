const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded())

const ProductController = require('./controllers/product.controller');
const CategoryController = require('./controllers/category.controller');
const {query} = require('./connectToDB');


// ================================================ Create Database Tables
const { upCatQuery } = require('./migrations/migrationCategoryTable');
const { upProductQuery } = require('./migrations/migrationProductTable');
app.post('/create', async(req, res) => {
    await query(upCatQuery);
    await query(upProductQuery);
    res.end();
})


// ========================================================================== Category Routes

// ================================================ Get Category List
app.get("/category", async(req, res) => {
    CategoryController.getCategoryList(req, res);
})


// ================================================ Get One Category
app.get("/category/:id", async(req, res) => {
    CategoryController.getCategoryByID(req, res);
})

// ================================================ Create Category
app.post("/category", async(req, res) => {
    CategoryController.createCategory(req, res);
})


// ================================================ Delete Category
app.delete("/category/:id", async(req, res) => {
    CategoryController.deleteCategory(req, res);
})


// ================================================ Update Category
app.put("/category/:id", async(req, res) => {
    CategoryController.updateCategory(req, res);
})



// ========================================================================== Product

// ================================================ Get Products List
app.get("/product", async(req, res) => {
    const {name} = req.query;
    if(name) ProductController.getProductByName(req, res);
    else ProductController.getProductList(req, res);
})


// ================================================ Get Product By ID
app.get("/product/:id", async(req, res) => {
    ProductController.getProductByID(req, res);
})


// ================================================ Create Product
app.post("/product", async(req, res) => {
    ProductController.createProduct(req, res);
})


// ================================================ Delete Product
app.delete("/product/:id", async(req, res) => {
    ProductController.deleteProduct(req, res);
})


// ================================================ Update Product
app.put("/product/:id", async(req, res) => {
    ProductController.updateProduct(req, res);
})


// ================================================ Listen
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
  })



