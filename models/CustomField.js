import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const CustomField = sequelize.define('custom_field', {
    name: {
        type: Sequelize.STRING
    },
    value: {
        type: Sequelize.STRING
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('CustomField table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default CustomField