const {query} = require('../connectToDB')


// ================================================ find
async function find(){
    return new Promise((resolve, reject) => {
        const q = "SELECT * FROM products";
        const result = query(q);
        resolve(result);
    })
}


// ================================================ findOneByID
async function findOneByID(id){
    return new Promise((resolve, reject) => {
        const q = `SELECT * FROM products WHERE id=${id}`;
        const result = query(q);
        resolve(result);
    })
}


// ================================================ insertOne
async function insertOne(name, price, cat_id){
    return new Promise((resolve, reject) => {
        q = `INSERT INTO products(name,price,cat_id)
        VALUES('${name}',${price},${cat_id});`
        const result = query(q);
        resolve(result);
    })
}


// ================================================ deleteOne
async function deleteOne(id){
    return new Promise((resolve, reject) => {
        deleteQuery = `DELETE FROM products
        WHERE id = ${id}`;
        const result = query(deleteQuery);
        resolve(result);
    })
}


// ================================================ updateOne
async function updateOne(id, name, price, cat_id){
    return new Promise((resolve, reject) => {
        q = `UPDATE products
        SET name='${name}', price=${price}, cat_id=${cat_id} WHERE id=${id}`;
        const result = query(q);
        resolve(result);
    })
}

// ================================================ Export
const ProductModel = {
    find,
    findOneByID,
    insertOne,
    deleteOne,
    updateOne
}

module.exports = ProductModel;