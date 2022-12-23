import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Setting = sequelize.define('setting', {
    userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Setting table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Setting