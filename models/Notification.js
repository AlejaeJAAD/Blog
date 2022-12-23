import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Notification = sequelize.define('notification', {
    type: {
        type: Sequelize.STRING,
        values: ['like', 'comment', 'follow'],
        allowNull: false
    },
    senderId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    recipientId: {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    content: {
        type: Sequelize.TEXT
    },
    read: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Notification table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Notification