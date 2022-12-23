import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Subscription = sequelize.define('subscription', {
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
    type: {
        type: Sequelize.ENUM,
        values: ['weekly', 'monthly', 'annual'],
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM,
        values: ['active', 'cancelled'],
        defaultValue: 'active'
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Subscription table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Subscription