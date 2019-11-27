import {DataTypes, Model, Sequelize } from 'sequelize';

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
        schoolId: Sequelize.INTEGER,
        journeyId: Sequelize.INTEGER,

      },
      {
        sequelize,
      }
    );
  }
}

export default Person;
