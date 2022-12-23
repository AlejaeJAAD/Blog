import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Tag = sequelize.define('tag', {
    name: {
        type: Sequelize.STRING
    },
    // postId: {
    //   type: Sequelize.STRING
    // }
    description: {
      type: Sequelize.TEXT,
    },
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Tag table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Tag