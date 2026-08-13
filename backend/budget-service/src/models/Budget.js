// models/Budget.js

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Budget = sequelize.define(
  "Budget",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    userId: {
      type: DataTypes.UUID,
      allowNull: false
    },

    category: {
      type: DataTypes.STRING(100),
      allowNull: false
    },

    monthlyLimit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  },
  {
    tableName: "budgets",
    timestamps: true,

    indexes: [
      {
        fields: ["userId"]
      },
      {
        fields: ["category"]
      }
    ]
  }
);

module.exports = Budget;