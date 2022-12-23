import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Like = sequelize.define('like', {
   user: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Like table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Like