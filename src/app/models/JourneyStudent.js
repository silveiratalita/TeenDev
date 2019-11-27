import {DataTypes, Model } from 'sequelize';

class Person extends Model {

  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        note: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Person;
