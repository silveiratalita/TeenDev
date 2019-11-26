import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

const models = [];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    return models.map(model => model.init(this.connection));
  }
}

export default new Database();
