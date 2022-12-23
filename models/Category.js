import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Category = sequelize.define('category', {
    name: {
        type: Sequelize.STRING,
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
   console.log('Category table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Category