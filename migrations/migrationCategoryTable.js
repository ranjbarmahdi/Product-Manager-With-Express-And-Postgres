const up = () => `CREATE TABLE IF NOT EXISTS categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);`

module.exports = {
    upCatQuery: up()
}