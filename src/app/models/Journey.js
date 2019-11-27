import {DataTypes, Model } from 'sequelize';

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
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
      },
      {
        sequelize,
      }
    );

    Journey.associate = models => {
      Journey.belongsTo(models.Person, { as: 'school', foreignKey: 'school_id' });
      Journey.belongsTo(models.Person, { as: 'company', foreignKey: 'company_id' })};

  }
}

export default Journey;
