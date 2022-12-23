import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Follow = sequelize.define('follow', {},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Follow table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Follow