# 🌿 Plantory 🌿 
A simple app to manage plant nursery inventory, track stock, and organize plants.

## 📖 Overview

This is an Inventory Management App for a Plant Nursery, built using Node.js, Express, PostgreSQL, and EJS. The app allows users to manage plant categories and items, performing CRUD (Create, Read, Update, Delete) operations securely.

## 🚀 Features

- 🌱 Manage Plants & Categories (Create, Update, Delete, View)
- 🔐 Password-protected Admin Actions (Create, Update, Delete)
- 🏷️ Categorized Inventory (Items belong to categories)
- 📄 Dynamic EJS Views (Styled with CSS)
- 📊 PostgreSQL Database (Persistent storage)
- 🚢 Deployed on Railway

## 🛠️ Technologies Used

- Backend: Node.js, Express.js
- Database: PostgreSQL
- Templating Engine: EJS
- Styling: CSS
- Deployment: Railway

## 📂 Folder Structure
```
/plant-nursery-app
│── /controllers   # Handles application logic
│── /db            # Database connection & queries
│── /public        # Static assets (CSS, images)
│── /routes        # Route definitions
│── /views         # EJS templates for frontend
│── app.js         # Main entry point
│── .env           # Environment variables
│── package.json   # Dependencies & scripts
│── README.md      # Documentation
```

## 🛠️ Installation & Setup

1. Clone the Repository
```bash
git clone https://github.com/jacob-guerrero/odin-intenfory-app.git
cd odin-intenvory-app
```

2. Install Dependencies
```bash
npm install
```

3. Set Up Database
- Create a PostgreSQL database.
- Update .env file with your database connection string:
```bash
DATABASE_URL=your_postgresql_connection_string
ADMIN_PASSWORD=your_secure_password
```
- Run the database setup script:
```bash
node db/populatedb.js
```

4. Run the Application
```bash
npm start
```
Open http://localhost:3000 in your browser.

## 📌 Usage

- Visit the homepage to browse plant categories.
- Click on a category to see available plants.
- Admin Actions: Creating, updating, and deleting items require a password.

🗄️ Database Schema
```sql
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
```

## 🤝 Contributing
Feel free to fork the repo and submit a pull request with improvements!

## 🧑‍💻 Author
- Jacob Guerrero
- GitHub: https://github.com/jacob-guerrero

## Demo
You can try out a live demo of Plantory [here](https://inventory-app-jg.up.railway.app).

## ⚖️ License
This project is licensed under the MIT License.


## Credits:
Photos:

Photo by Lauri Poldre from Pexels: https://www.pexels.com/photo/close-up-of-a-green-plant-19635421/
Photo by Ylanite Koppens: https://www.pexels.com/photo/three-green-assorted-plants-in-white-ceramic-pots-776656/
Photo by Kenneth Surillo: https://www.pexels.com/photo/prickly-pear-cacti-in-pots-standing-on-a-table-22610760/
Photo by fei wang: https://www.pexels.com/photo/mexican-snowball-plants-in-pot-15373588/
Photo by Nadiye Odabaşı: https://www.pexels.com/photo/close-up-shot-of-a-green-snake-plant-in-white-ceramic-plant-10467814/
Photo by Rov Camato: https://www.pexels.com/photo/green-cacti-in-pots-near-window-1201798/
Photo by Elle Hughes: https://www.pexels.com/photo/plants-in-vases-2069425/
Photo by stayhereforu: https://www.pexels.com/photo/a-set-of-green-potted-plants-on-brown-wooden-shelves-13284763/
Photo by Huy Phan from Pexels: https://www.pexels.com/photo/rectangular-white-and-black-wooden-display-rack-beside-green-snake-plant-2826787/
Photo by Febe Theodora: https://www.pexels.com/photo/two-plants-in-pots-1836600/
Photo by Eda Yurtkuran : https://www.pexels.com/photo/shelves-with-potted-plants-16753581/
Photo by Mathias Reding: https://www.pexels.com/photo/plant-in-flowerpot-on-windowsill-17719773/
Photo by Szymon Shields: https://www.pexels.com/photo/blooming-cherry-tree-in-summer-garden-15328794/
Photo by Thanh Luu: https://www.pexels.com/photo/modern-villa-with-unique-landscaping-and-architecture-29170012/
Photo by Alex Bargain: https://www.pexels.com/photo/white-and-grey-kitten-smelling-white-daisy-flower-1472999/
Photo by Alex Bargain: https://www.pexels.com/photo/white-and-grey-kitten-smelling-white-daisy-flower-1472999/
Photo by Magda Ehlers from Pexels: https://www.pexels.com/photo/close-up-of-vibrant-pink-dahlia-in-bloom-30586914/
