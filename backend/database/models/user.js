'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    pay_number: DataTypes.STRING,
    pay_exp_month: DataTypes.STRING,
    pay_exp_year: DataTypes.STRING,
    cvv: DataTypes.STRING,
    phone: DataTypes.STRING,
    add_line_1: DataTypes.STRING,
    add_line_2: DataTypes.STRING,
    add_city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};