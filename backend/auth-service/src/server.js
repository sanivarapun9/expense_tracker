// server.js

const app = require("./app");
const { sequelize } = require("./models");

const connectDB =
require("./config/dbConnection");

const PORT = process.env.PORT || 5001;

(async () => {

  await connectDB();

  await sequelize.sync({
    alter: true
  });

  app.listen(PORT, () => {
    console.log(
      `Auth Service Running On ${PORT}`
    );
  });

})();