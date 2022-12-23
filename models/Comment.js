import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Comment = sequelize.define('comment', {
    content: {
      type: Sequelize.STRING,
      allowNull: false
    },
    flag: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    flagCount: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.ENUM,
      values: ['approved', 'pending', 'rejected'],
      defaultValue: 'pending'
    },
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
    parentId: {
      type: Sequelize.STRING
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Comment table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Comment