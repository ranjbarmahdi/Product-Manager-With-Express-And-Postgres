const {query} = require('../connectToDB')


// ================================================ find
async function find(){
    return new Promise((resolve, reject) => {
        const q = "SELECT * FROM categories";
        const result = query(q);
        resolve(result);
    })
}


// ================================================ findOneByID
async function findOneByID(id){
    return new Promise((resolve, reject) => {
        const q = `SELECT * FROM categories WHERE id=${id}`;
        const result = query(q);
        resolve(result);
    })
}


// ================================================ insertOne
async function insertOne(name){
    return new Promise((resolve, reject) => {
        q = `INSERT INTO categories(name)
        VALUES('${name}');`
        const result = query(q);
        resolve(result);
    })
}


// ================================================ deleteOne
async function deleteOne(id){
    return new Promise((resolve, reject) => {
        deleteQuery = `DELETE FROM categories
        WHERE id = ${id}`;
        const result = query(deleteQuery);
        resolve(result);
    })
}


// ================================================ updateOne
async function updateOne(id, name){
    return new Promise((resolve, reject) => {
        q = `UPDATE categories
        SET name='${name}' WHERE id=${id}`
        const result = query(q);
        resolve(result);
    })
}


// ================================================ Export
const CategoryModel = {
    find,
    findOneByID,
    insertOne,
    deleteOne,
    updateOne
}

module.exports = CategoryModel;