import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../app/model/User';
import Category from '../app/model/Category';
import Posts from '../app/model/Posts';

const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    User.init(this.connection);
    Category.init(this.connection);
    Posts.init(this.connection);

    User.associate(this.connection.models);
    Posts.associate(this.connection.models);
  }
}

export default new Database();
