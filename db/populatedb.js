const { Client } = require("pg");
require("dotenv").config();

const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.connectionString
    : process.env.LOCAL_DATABASE_URL;

const createTables = async () => {
  const client = new Client({ connectionString });

  const query = `
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name VARCHAR(255) NOT NULL,
      description TEXT
    );

    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      name VARCHAR(255) NOT NULL,
      category_id INT REFERENCES categories(id) ON DELETE CASCADE,
      price DECIMAL(10, 2) NOT NULL,
      stock_quantity INT DEFAULT 0,
      description TEXT
    );
  `;

  try {
    console.log("Connecting...");
    await client.connect();
    console.log("Connected!");

    await client.query(query);
    console.log("Tables created successfully!");
  } catch (err) {
    console.error("Error creating tables:", err);
  } finally {
    await client.end();
  }
};

const seedData = async () => {
  const client = new Client({ connectionString });

  const categorySeed = `
    INSERT INTO categories (name, description)
    VALUES 
    ('Indoor Plants', 'Plants for indoors'),
    ('Outdoor Plants', 'Plants for outdoors')
    ON CONFLICT DO NOTHING;
  `;

  const itemSeed = `
    INSERT INTO items (name, category_id, price, stock_quantity, description)
    VALUES
    ('Fiddle Leaf Fig', 1, 29.99, 10, 'A trendy indoor plant'),
    ('Monstera', 1, 19.99, 20, 'The Swiss cheese plant'),
    ('Fern', 2, 14.99, 15, 'Perfect for shady outdoor spots')
    ON CONFLICT DO NOTHING;
  `;

  try {
    console.log("Connecting...");
    await client.connect();
    console.log("Connected!");

    await client.query(categorySeed);
    await client.query(itemSeed);
    console.log("Data seeded successfully!");
  } catch (err) {
    console.error("Error seeding data:", err);
  } finally {
    await client.end();
    console.log("Database connection closed");
  }
};

const initDB = async () => {
  await createTables();
  await seedData();
};

initDB();
