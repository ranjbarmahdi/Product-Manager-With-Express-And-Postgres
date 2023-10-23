
const { Pool, Client } = require('pg');

const client = new Client({
    user: "clead",
    host: "localhost",
    database: "mahdiDB",
    password: "programmer_7",
    port: 5432
})

client.connect((err) => {
    if (err) console.log(err);
    else console.log("Connected To Db Successfully");
})


module.exports = {
    query: (text, values) => client.query(text, values=null)
}