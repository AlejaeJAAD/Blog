import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const PostTag = sequelize.define('postTag', {
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('PostTag table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default PostTag