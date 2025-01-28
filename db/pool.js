const { Pool } = require("express");
require("dotenv").config();

const connectionString =
  process.env.NODE_ENV === "production"
    ? process.env.connectionString
    : process.env.LOCAL_DATABASE_URL;

module.exports = new Pool({ connectionString });
