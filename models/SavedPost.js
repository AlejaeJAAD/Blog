import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const SavedPost = sequelize.define('savedPost', {
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('SavedPost table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default SavedPost