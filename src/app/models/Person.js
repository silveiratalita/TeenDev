import Sequelize, {DataTypes, Model } from 'sequelize';
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
        name: Sequelize.STRING,
        type: Sequelize.STRING,
        documentIdentifier: Sequelize.STRING,
        cellphone: Sequelize.STRING,
        email: Sequelize.STRING,
        adress: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        password_hash: Sequelize.STRING,

      },
      {
        sequelize,
      }
    );
  }
}

export default Person;
