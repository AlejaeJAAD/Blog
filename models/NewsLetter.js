import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const NewsLetter = sequelize.define('newsLetter', {
    subject: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    dateSent: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('NewsLetter table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default NewsLetter