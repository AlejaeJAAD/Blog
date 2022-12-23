import * as dotenv from 'dotenv'
import Sequelize from 'sequelize';

dotenv.config()

export const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
   {
     host: 'localhost',
     dialect: 'mysql'
   }
);

sequelize.authenticate().then(() => {
     console.log('Connection has been established successfully.');
}).catch(err => {
     console.error('Unable to connect to the database:', err);
});
