import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Person from '../app/models/Person';
import Journey from '../app/models/Journey';
import JourneyStudent from '../app/models/JourneyStudent';


const models = [Person, Journey, JourneyStudent];
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
