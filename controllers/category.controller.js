const CategoryModel = require('../models/category.model');


// ================================================ getCategoryList
async function getCategoryList(req, res){
    try {
        const {rowCount, rows} = await CategoryModel.find();
        (rowCount != 0) ? res.send(rows) : res.send({message: "There Is No Category"});
    } catch (error) {
        res.send({message: "Error In getCategoryList Controller"})
    }
}


// ================================================ getCategoryByID
async function getCategoryByID(req, res){
    try {
        const { id } = req.params;
        const {rowCount, rows} = await CategoryModel.findOneByID(id);          
        (rowCount != 0) ? res.send(rows) : res.send({message: "Category Not Found"});
    } catch (error) {
        res.send({message: "Error In getCategoryByID Controller"})
    }
}


// ================================================ createCategory
async function createCategory(req, res){
    try {
        const {name} = req.body;
        const {rowCount} = await CategoryModel.insertOne(name);
        (rowCount > 0) ? res.send({message: "Category Inserted Successfully"}) : res.send({message: "Inserting Category Failed"})
    } catch (error) {
        res.send({message: "Error In createCategory Controller"})
    }
}


// ================================================ deleteCategory
async function deleteCategory(req, res){
    try {
        const {id} = req.params;
        const {rowCount} = await CategoryModel.deleteOne(id);
        console.log(rowCount);
        (rowCount != 0) ? res.send({message: "Category Deleted Successfully"}) : res.send({message: "Category Not Found"})        
    } catch (error) {
        res.send({message: "Error In deleteCategory Controller"})  
    }
}


// ================================================ updateCategory
async function updateCategory(req, res){
    try {
        const {id} = req.params;
        const {name} = req.body;
        const {rowCount} = await CategoryModel.updateOne(id, name);
        (rowCount != 0) ? res.send({message: "Category Updated Successfully"}) : res.send({message: "Category Not Found"})
    } catch (error) {
        res.send({message: "Error In updateCategory Controller"})  
    }
}

// ================================================ Export
const CategoryController = {
    getCategoryList,
    getCategoryByID,
    createCategory,
    deleteCategory,
    updateCategory
}

module.exports = CategoryController;