import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Report = sequelize.define('report', {
    type: {
        type: Sequelize.ENUM,
        values: ['spam', 'abuse', 'other'],
        allowNull: false
    },
    reason: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
    },
    contentType: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contentId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Report table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Report