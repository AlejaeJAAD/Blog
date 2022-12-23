import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Profile = sequelize.define('profile', {
    bio: {
        type: Sequelize.TEXT
    },
    location: {
        type: Sequelize.STRING
    },
    website: {
        type: Sequelize.STRING
    },
    imageUrl: {
        type: Sequelize.STRING
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Profile table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Profile