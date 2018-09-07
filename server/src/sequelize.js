import Sequelize from 'sequelize';
import UserModel from './models/user';

// Connection to MYSQL
const sequelize = new Sequelize(
  'bookstore',
  'root',
  '',
  {
    host: 'localhost',
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
