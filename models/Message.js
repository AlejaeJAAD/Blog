import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Message = sequelize.define('message', {
    subject: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
    read: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    sender: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    recipient: {
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
   console.log('Message table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Message