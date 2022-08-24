const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('currency', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticker: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currenciestoconvert: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
  });
};
