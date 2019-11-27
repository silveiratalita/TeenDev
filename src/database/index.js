import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Person from '../app/models/Person';

const models = [Person];
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
