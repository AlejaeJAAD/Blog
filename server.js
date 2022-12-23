import * as dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors'
import helmet from 'helmet'

import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

import User from './models/User.js'
import Post from './models/Post.js'
import Comment from './models/Comment.js'
import Like from './models/Like.js'
import Follow from './models/Follow.js'
import Profile from './models/Profile.js'
import Tag from './models/Tag.js'
import CustomField from './models/CustomField.js'
import Notification from './models/Notification.js'
import Subscription from './models/Subscription.js'
import Report from './models/Report.js'
import Setting from './models/Setting.js'
import Category from './models/Category.js'
import Message from './models/Message.js'
import SavedPost from './models/SavedPost.js'
import PostTag from './models/PostTag.js'
import BlogCategory from './models/BlogCategory.js'
import NewsLetter from './models/NewsLetter.js';

import { createServer } from 'http';
import { Server } from 'socket.io'; //replaces (import socketIo from 'socket.io')

import rateLimit from 'express-rate-limit'

dotenv.config()

const whiteList = [process.env.ORIGIN1, process.env.ORIGIN2]

const app = express()

app.enable('trust proxy');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

//  Apply rate limiting to all routes
app.use(limiter);
app.use(helmet.frameguard({ action: 'deny' }));
app.use(helmet.noSniff());

app.use(bodyParser.json());
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || whiteList.includes(origin)) {
                return callback(null, origin)
            }
            return callback(
                "CORS ERROR origin: " + origin + " No authorization!"
            )
        },
        credentials: true,
    })
)

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/post", postRoutes)

// User.hasMany(Post);
// Post.belongsTo(User, { foreignKey: 'userId' });
// Comment.belongsTo(User, { foreignKey: 'userId' });
// Comment.belongsTo(Post, { foreignKey: 'postId' });
// Comment.hasMany(Comment, { foreignKey: 'parentId' })
// Like.belongsTo(User, { foreignKey: 'userId' });
// Like.belongsTo(Post, { foreignKey: 'postId' });
// Follow.belongsTo(User, { foreignKey: 'userId' });
// Follow.belongsTo(User, { foreignKey: 'followId' });
// User.hasOne(Profile, { foreignKey: 'userId' });
// Tag.belongsToMany(Post, { foreignKey: 'postId' })
// CustomField.hasMany(Post, { foreignKey: 'postId' })

// Set up associations
// User.hasMany(Post, { as: 'author' });
// User.hasMany(Comment, { as: 'author' });
// Post.belongsTo(User, { as: 'author' });
// Comment.belongsTo(User, { as: 'author' });
// Post.hasMany(Comment, { through: 'blog_post_tag' });
// Comment.belongsTo(Post);
// Like.belongsTo(User);
// Like.belongsTo(Post);
// Post.belongsToMany(Tag, { through: 'blog_post_tag' });
// Tag.belongsToMany(Post, { through: 'blog_post_tag' });
// Follow.belongsTo(User, { as: 'follower' });
// Follow.belongsTo(User, { as: 'following' });
// CustomField.belongsTo(User);
// User.hasMany(CustomField);
// User.hasOne(Profile);
// Profile.belongsTo(User);
// Notification.belongsTo(User, { as: 'sender' });
// Notification.belongsTo(User, { as: 'recipient' });
// Subscription.belongsTo(User);
// Report.belongsTo(User);
// Setting.belongsTo(User);
// Post.belongsTo(Category);
// Category.hasMany(BlogPost);
// Message.belongsTo(User, { as: 'sender' });
// Message.belongsTo(User, { as: 'recipient' });

// Define the associations between your models
// User.hasMany(Post, { foreignKey: 'authorId' });
// Post.belongsTo(User, { foreignKey: 'authorId' });
// Post.hasMany(Comment, { foreignKey: 'postId' });
// Comment.belongsTo(Post, { foreignKey: 'postId' });
// User.hasMany(Comment, { foreignKey: 'authorId' });
// Comment.belongsTo(User, { foreignKey: 'authorId' });
// Post.belongsToMany(Tag, { through: PostTag, foreignKey: 'postId' });
// Tag.belongsToMany(Post, { through: PostTag, foreignKey: 'tagId' });
// User.belongsToMany(User, { through: Follow, as: 'following', foreignKey: 'followerId' });
// User.belongsToMany(User, { through: Follow, as: 'followers', foreignKey: 'followingId' });
// User.hasMany(CustomField, { foreignKey: 'userId' });
// CustomField.belongsTo(User, { foreignKey: 'userId' });
// User.hasOne(Profile, { foreignKey: 'userId' });
// Profile.belongsTo(User, { foreignKey: 'userId' });
// User.belongsToMany(Post, { through: Like, foreignKey: 'userId' });
// Post.belongsToMany(User, { through: Like, foreignKey: 'postId' });
// User.belongsToMany(Post, { through: SavedPost, foreignKey: 'userId' });
// Post.belongsToMany(User, { through: SavedPost, foreignKey: 'postId' });
// User.hasMany(Notification, { foreignKey: 'recipientId' });
// Notification.belongsTo(User, { foreignKey: 'recipientId' });
// User.hasMany(Notification, { foreignKey: 'senderId' });
// Notification.belongsTo(User, { foreignKey: 'senderId' });
// Post.hasMany(Notification, { foreignKey: 'postId' });
// Notification.belongsTo(Post, { foreignKey: 'postId' });

// Define the associations between your models
User.hasMany(Post, { foreignKey: 'authorId' });
Post.belongsTo(User, { foreignKey: 'authorId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

User.hasMany(Comment, { foreignKey: 'authorId' });
// Comment.belongsTo(User, { foreignKey: 'authorId' });

Post.belongsToMany(Tag, { through: PostTag, foreignKey: 'postId' });
Tag.belongsToMany(Post, { through: PostTag, foreignKey: 'tagId' });

User.belongsToMany(User, { through: Follow, as: 'following', foreignKey: 'followerId' });
User.belongsToMany(User, { through: Follow, as: 'followers', foreignKey: 'followingId' });

User.hasMany(CustomField, { foreignKey: 'userId' });
CustomField.belongsTo(User, { foreignKey: 'userId' });

User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });

Post.belongsToMany(User, { through: Like, foreignKey: 'postId' });
User.belongsToMany(Post, { through: Like, foreignKey: 'userId' });

User.belongsToMany(Post, { through: SavedPost, foreignKey: 'userId' });
Post.belongsToMany(User, { through: SavedPost, foreignKey: 'postId' });

User.hasMany(Notification, { foreignKey: 'recipientId' });
Notification.belongsTo(User, { foreignKey: 'recipientId', as: 'recipient' });

User.hasMany(Notification, { foreignKey: 'senderId' });
Notification.belongsTo(User, { foreignKey: 'senderId', as: 'sender' });

Post.hasMany(Notification, { foreignKey: 'postId' });
Notification.belongsTo(Post, { foreignKey: 'postId' });

Comment.hasMany(Notification, { foreignKey: 'commentId' });
Notification.belongsTo(Comment, { foreignKey: 'commentId' });

User.hasMany(Message, { foreignKey: 'senderId' });
// Message.belongsTo(User, { foreignKey: 'senderId', as: 'sender' });

User.hasMany(Message, { foreignKey: 'recipientId' });
// Message.belongsTo(User, { foreignKey: 'recipientId', as: 'recipient' });

Post.hasMany(Report, { foreignKey: 'postId' });
Report.belongsTo(Post, { foreignKey: 'postId' });

User.hasMany(Report, { foreignKey: 'reporterId' });
Report.belongsTo(User, { foreignKey: 'reporterId', as: 'reporter' });

User.hasMany(Subscription, { foreignKey: 'userId' });
Subscription.belongsTo(User, { foreignKey: 'userId' });

Category.hasMany(Post, { foreignKey: 'categoryId' });
Post.belongsTo(Category, { foreignKey: 'categoryId' });

// Post.belongsToMany(Tag, { through: PostTag });
// Tag.belongsToMany(Post, { through: PostTag });

Post.hasMany(Like, { foreignKey: 'postId' });

Post.belongsToMany(Category, { through: BlogCategory });
Category.belongsToMany(Post, { through: BlogCategory });

NewsLetter.belongsTo(User);
User.hasOne(NewsLetter);

Setting.belongsTo(User);
User.hasOne(Setting);

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });


io.on('connection', (socket) => {
  console.log('Connection established');

  socket.on('subscribe', room => {
    socket.join(room);
  });

  socket.on('unsubscribe', room => {
    socket.leave(room);
  });
});

// Send a real-time update when a new comment is created
Comment.afterCreate(comment => {
    io.to(`comments/${comment.postId}`).emit('new-comment', comment);
});

// Send a real-time update when a new follow is created
Follow.afterCreate(follow => {
    io.to(`follows/${follow.followId}`).emit('new-follow', follow);
});

app.set('port', process.env.PORT || 5000);

httpServer.listen(app.get('port'), function () {
    var port = httpServer.address().port;
    console.log('Running on : ', port);
});

process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message)
})
