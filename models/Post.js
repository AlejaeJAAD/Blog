import Sequelize from 'sequelize';
import { sequelize } from '../configure-db.js'

const Post = sequelize.define('post', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.TEXT
    },
    status: {
      type: Sequelize.ENUM,
      values: ['published', 'draft'],
      defaultValue: 'draft'
    },
    author: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    dateCreated: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    featuredImage: {
      type: Sequelize.STRING
    },
    isPublished: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    views: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    rating: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    flag: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    flagCount: {
      type: Sequelize.INTEGER
    }
},
{
  timestamps: false,
})

sequelize.sync({ force: true }).then(() => {
   console.log('Post table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

export default Post