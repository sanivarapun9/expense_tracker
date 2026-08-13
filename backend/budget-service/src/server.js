require("dotenv").config();

const app =
require("./app");

const connectDB =
require("./config/dbConnection");

const {
 sequelize
} = require("./models");

const PORT =
process.env.PORT || 5002;

(async () => {

  await connectDB();

  await sequelize.sync({
    alter: true
  });

  app.listen(PORT, () => {

    console.log(
      `Expense Service Running On ${PORT}`
    );

  });

})();