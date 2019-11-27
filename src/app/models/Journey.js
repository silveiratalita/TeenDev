import {DataTypes, Model, Sequelize } from 'sequelize';

class Journey extends Model {

  static init(sequelize) {

    super.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true,
          unique: true,
        },
        startDate: DataTypes.DATE,
        endData: DataTypes.DATE,
        companyId: Sequelize.INTEGER,
        schoolId: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    Journey.associate = models => {
      Journey.belongsTo(models.Person, {
        as: 'schoolId',
        foreignKey: 'id',
      });
      Journey.belongsTo(models.Person, {
        as: 'companyId',
        foreignKey: 'id',
      });
    };
  }
}

export default Journey;
