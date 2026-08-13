const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Expense = sequelize.define(
  "Expense",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    category: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },

    expenseDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },

    notes: {
      type: DataTypes.STRING(500)
    }
  },
  {
    tableName: "expenses",
    timestamps: true,
    indexes: [
      {
        fields: ["userId"]
      },
      {
        fields: ["category"]
      },
      {
        fields: ["expenseDate"]
      }
    ]
  }
);

module.exports = Expense;