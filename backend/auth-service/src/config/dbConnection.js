// src/config/dbConnection.js

const sequelize = require("./database");

const connectDB = async () => {
  try {

    await sequelize.authenticate();

    console.log("Database Connected Successfully");

  } catch (error) {

    console.error("Database Connection Failed");

    console.error(error);

    process.exit(1);
  }
};

module.exports = connectDB;