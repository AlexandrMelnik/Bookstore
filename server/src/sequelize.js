import Sequelize from 'sequelize';
import UserModel from './models/user';
import BooksModel from './models/books';
import dotenv from 'dotenv';

dotenv.config();

// Connection to MYSQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// Check status connect
sequelize.authenticate().then(() => {
  console.log('Connect to mysql success');
}).catch(err => {
  console.error('ERROR', 'Connect to mysql failed');
})

export const User = UserModel(sequelize, Sequelize);
export const Books = BooksModel(sequelize, Sequelize);
