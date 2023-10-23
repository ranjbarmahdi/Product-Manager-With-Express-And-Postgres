const ProductModel = require('../models/product.model');


// ================================================ getProductsList
async function getProductList(req, res){
    try {
        const {rowCount, rows} = await ProductModel.find();
        (rowCount != 0) ? res.send(rows) : res.send({message: "There Is No Product"});
    } catch (error) {
        res.send({message: "Error In getProductList Controller"})
    }
}


// ================================================ getProductByID
async function getProductByID(req, res){
    try {
        const { id } = req.params;
        const {rowCount, rows} = await ProductModel.findOneByID(id);
        (rowCount != 0) ? res.send(rows) : res.send({message: "There Is No Product"});
    } catch (error) {
        res.send({message: "Error In getProductByID Controller"})
    }
}


// ================================================ getProductByName(Regex)
async function getProductByName(req, res){
    try {
        const {name} = req.query;
        const {rows} = await ProductModel.find();
        const productNameReg = new RegExp(name, 'gi');
        const result = rows.filter(product => product.name.match(productNameReg));
        console.log(result);
        (result.length != 0) ? res.send(result) : res.send({message: "There Is No Product"});
    } catch (error) {
        res.send({message: "Error In getProductByName Controller"})
    }
}


// ================================================ createProduct
async function createProduct(req, res){
    try {
        const {name, price, cat_id} = req.body;
        console.log(name, price, cat_id);
        const {rowCount} = await ProductModel.insertOne(name, price, cat_id);
        (rowCount > 0) ? res.send({message: "Product Inserted Successfully"}) : res.send({message: "Inserting Product Failed"})
    } catch (error) {
        res.send({message: "Error In createProduct Controller"})
    }
}


// ================================================ deleteProduct
async function deleteProduct(req, res){
    try {
        const {id} = req.params;
        const {rowCount} = await ProductModel.deleteOne(id);
        (rowCount != 0) ? res.send({message: "Product Deleted Successfully"}) : res.send({message: "Product Not Found"})        
    } catch (error) {
        res.send({message: "Error In deleteProduct Controller"})  
    }
}


// ================================================ updateProduct
async function updateProduct(req, res){
    try {
        const {id} = req.params;
        const {name, price, cat_id} = req.body;
        const {rowCount} = await ProductModel.updateOne(id, name, price, cat_id);
        (rowCount != 0) ? res.send({message: "Product Updated Successfully"}) : res.send({message: "Product Not Found"})
    } catch (error) {
        res.send({message: "Error In updateProduct Controller"})  
    }
}

// ================================================ Export
const ProductController = {
    getProductList,
    getProductByID,
    getProductByName,
    createProduct,
    deleteProduct,
    updateProduct
}

module.exports = ProductController;