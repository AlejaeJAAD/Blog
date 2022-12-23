import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const BlogCategory = sequelize.define('blogCategory', {
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('BlogCategory table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default BlogCategory