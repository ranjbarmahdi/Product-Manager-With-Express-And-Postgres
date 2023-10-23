const up = () => `CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    name TEXT,
    price INTEGER,
    cat_id INTEGER,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now(),
    FOREIGN KEY (cat_id) REFERENCES categories(id) ON DELETE CASCADE
);`

module.exports = {
    upProductQuery: up()
}