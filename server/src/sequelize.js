import Sequelize from 'sequelize';
import UserModel from './models/user';
import { config } from '../configServer';

// Connection to MYSQL
const sequelize = new Sequelize(
  config.db_name,
  config.db_user,
  config.db_pass,
  {
    host: config.db_host,
    dialect: 'mysql',
  }
);

// Check status connect
sequelize.authenticate().then(() => {
  console.log('Connect to mysql success');
}).catch(err => {
  console.error('ERROR', 'Connect to mysql failed');
})

const User = UserModel(sequelize, Sequelize);

export default User ;
