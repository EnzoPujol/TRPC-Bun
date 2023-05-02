'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TestMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TestMessage.init({
    message: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TestMessage',
  });
  return TestMessage;
};