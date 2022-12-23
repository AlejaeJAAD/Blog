import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const User = sequelize.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: {
        type: Sequelize.STRING
    },
    firstname: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    nickname: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    status: {
        type: Sequelize.ENUM,
        values: ['active', 'inactive'],
        defaultValue: 'active'
    },
    role: {
        type: Sequelize.ENUM,
        values: ['admin', 'moderator', 'user'],
        defaultValue: 'user'
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('User table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default User