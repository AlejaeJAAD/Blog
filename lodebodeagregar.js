// Find all blog categories sorted by name in ascending order
async function getAllBlogCategoriesSortedByNameAsc() {
    return await BlogCategory.findAll({
      order: [['name', 'ASC']]
    });
  }
  
  // Find all categories sorted by name in ascending order
  async function getAllCategoriesSortedByNameAsc() {
    return await Category.findAll({
      order: [['name', 'ASC']]
    });
  }
  
  // Find all comments for a specific post sorted by createdAt in descending order
  async function getAllCommentsForPostSortedByCreatedAtDesc(postId) {
    return await Comment.findAll({
      where: {
        postId: postId
      },
      order: [['createdAt', 'DESC']]
    });
  }
  
  // Find all custom fields for a specific user sorted by createdAt in ascending order
  async function getAllCustomFieldsForUserSortedByCreatedAtAsc(userId) {
    return await CustomField.findAll({
      where: {
        userId: userId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all users that a specific user is following sorted by username in ascending order
  async function getAllUsersFollowedByUserSortedByUsernameAsc(userId) {
    const follows = await Follow.findAll({
      where: {
        followerId: userId
      }
    });
    const followedUserIds = follows.map(follow => follow.followingId);
    return await User.findAll({
      where: {
        id: followedUserIds
      },
      order: [['username', 'ASC']]
    });
  }
  
  // Find all users that are following a specific user sorted by username in ascending order
  async function getAllUsersFollowingUserSortedByUsernameAsc(userId) {
    const follows = await Follow.findAll({
      where: {
        followingId: userId
      }
    });
    const followerIds = follows.map(follow => follow.followerId);
    return await User.findAll({
      where: {
        id: followerIds
      },
      order: [['username', 'ASC']]
    });
  }
  
  // Find all likes for a specific post sorted by createdAt in descending order
  async function getAllLikesForPostSortedByCreatedAtDesc(postId) {
    return await Like.findAll({
      where: {
        postId: postId
      },
      order: [['createdAt', 'DESC']]
    });
  }
  
  // Find all messages sent by a specific user sorted by createdAt in ascending order (continued)
async function getAllMessagesSentByUserSortedByCreatedAtAsc(userId) {
    return await Message.findAll({
      where: {
        senderId: userId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all messages received by a specific user sorted by createdAt in ascending order
  async function getAllMessagesReceivedByUserSortedByCreatedAtAsc(userId) {
    return await Message.findAll({
      where: {
        receiverId: userId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all newsletter subscribers sorted by email in ascending order
  async function getAllNewsLetterSubscribersSortedByEmailAsc() {
    return await NewsLetter.findAll({
      order: [['email', 'ASC']]
    });
  }
  
  // Find all notifications for a specific user sorted by createdAt in descending order
  async function getAllNotificationsForUserSortedByCreatedAtDesc(userId) {
    return await Notification.findAll({
      where: {
        userId: userId
      },
      order: [['createdAt', 'DESC']]
    });
  }
  
  // Find all posts for a specific blog category sorted by createdAt in descending order
  async function getAllPostsForBlogCategorySortedByCreatedAtDesc(blogCategoryId) {
    return await Post.findAll({
      where: {
        blogCategoryId: blogCategoryId
      },
      order: [['createdAt', 'DESC']]
    });
  }
  
  // Find all posts for a specific category sorted by createdAt in descending order
  async function getAllPostsForCategorySortedByCreatedAtDesc(categoryId) {
    return await Post.findAll({
      where: {
        categoryId: categoryId
      },
      order: [['createdAt', 'DESC']]
    });
  }
  
  // Find all posts for a specific user sorted by createdAt in descending order
  async function getAllPostsForUserSortedByCreatedAtDesc(userId) {
    return await Post.findAll({
      where: {
        userId: userId
      },
      order: [['createdAt', 'DESC']]
    });
  }
  
  // Find all post tags for a specific post sorted by createdAt in ascending order (continued)
async function getAllPostTagsForPostSortedByCreatedAtAsc(postId) {
    return await PostTag.findAll({
      where: {
        postId: postId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all profiles sorted by createdAt in ascending order
  async function getAllProfilesSortedByCreatedAtAsc() {
    return await Profile.findAll({
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all reports made by a specific user sorted by createdAt in ascending order
  async function getAllReportsMadeByUserSortedByCreatedAtAsc(reporterId) {
    return await Report.findAll({
      where: {
        reporterId: reporterId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all reports made about a specific user sorted by createdAt in ascending order
  async function getAllReportsAboutUserSortedByCreatedAtAsc(reportedId) {
    return await Report.findAll({
      where: {
        reportedId: reportedId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all saved posts for a specific user sorted by createdAt in ascending order
  async function getAllSavedPostsForUserSortedByCreatedAtAsc(userId) {
    return await SavedPost.findAll({
      where: {
        userId: userId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all settings for a specific user sorted by createdAt in ascending order
  async function getAllSettingsForUserSortedByCreatedAtAsc(userId) {
    return await Setting.findAll({
      where: {
        userId: userId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all subscriptions for a specific user sorted by createdAt in ascending order
  async function getAllSubscriptionsForUserSortedByCreatedAtAsc(subscriberId) {
    return await Subscription.findAll({
      where: {
        subscriberId: subscriberId
      },
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all tags sorted by name in ascending order
  async function getAllTagsSortedByNameAsc() {
    return await Tag.findAll({
      order: [['name', 'ASC']]
    });
  }
  
  // Find all users sorted by createdAt in ascending order
  async function getAllUsersSortedByCreatedAtAsc() {
    return await User.findAll({
      order: [['createdAt', 'ASC']]
    });
  }
  
  // Find all users sorted by username in ascending order
async function getAllUsersSortedByUsernameAsc() {
    return await User.findAll({
      order: [['username', 'ASC']]
    });
  }
  
  // Find all users sorted by email in ascending order
  async function getAllUsersSortedByEmailAsc() {
    return await User.findAll({
      order: [['email', 'ASC']]
    });
  }
  
  // Find the number of followers for a specific user
  async function getNumFollowersForUser(userId) {
    const follows = await Follow.findAll({
      where: {
        followingId: userId
      }
    });
    return follows.length;
  }
  
  // Find the number of users that a specific user is following
  async function getNumUsersFollowedByUser(userId) {
    const follows = await Follow.findAll({
      where: {
        followerId: userId
      }
    });
    return follows.length;
  }
  
  // Find the number of likes for a specific post
  async function getNumLikesForPost(postId) {
    const likes = await Like.findAll({
      where: {
        postId: postId
      }
    });
    return likes.length;
  }
  
  // Find the number of messages sent by a specific user
  async function getNumMessagesSentByUser(userId) {
    const messages = await Message.findAll({
      where: {
        senderId: userId
      }
    });
    return messages.length;
  }
  
  // Find the number of messages received by a specific user
  async function getNumMessagesReceivedByUser(userId) {
    const messages = await Message.findAll({
      where: {
        receiverId: userId
      }
    });
    return messages.length;
  }
  
  // Find the number of posts for a specific blog category
  async function getNumPostsForBlogCategory(blogCategoryId) {
    const posts = await Post.findAll({
      where: {
        blogCategoryId: blogCategoryId
      }
    });
    return posts.length;
  }
  
  // Find the number of posts for a specific category (continued)
async function getNumPostsForCategory(categoryId) {
    const posts = await Post.findAll({
      where: {
        categoryId: categoryId
      }
    });
    return posts.length;
  }
  
  // Find the number of posts for a specific user
  async function getNumPostsForUser(userId) {
    const posts = await Post.findAll({
      where: {
        userId: userId
      }
    });
    return posts.length;
  }
  
  // Find the number of reports made by a specific user
  async function getNumReportsMadeByUser(reporterId) {
    const reports = await Report.findAll({
      where: {
        reporterId: reporterId
      }
    });
    return reports.length;
  }
  
  // Find the number of reports made about a specific user
  async function getNumReportsAboutUser(reportedId) {
    const reports = await Report.findAll({
      where: {
        reportedId: reportedId
      }
    });
    return reports.length;
  }
  
  // Find the number of saved posts for a specific user
  async function getNumSavedPostsForUser(userId) {
    const savedPosts = await SavedPost.findAll({
      where: {
        userId: userId
      }
    });
    return savedPosts.length;
  }
  
  // Find the number of subscriptions for a specific user
  async function getNumSubscriptionsForUser(subscriberId) {
    const subscriptions = await Subscription.findAll({
      where: {
        subscriberId: subscriberId
      }
    });
    return subscriptions.length;
  }
  
  // Check if a specific user is following another specific user
  async function isUserFollowingUser(followerId, followingId) {
    const follow = await Follow.findOne({
      where: {
        followerId: followerId,
        followingId: followingId
      }
    });
    return follow !== null;
  }
  
  // Check if a specific user has liked a specific post
  async function hasUserLikedPost(userId, postId) {
    const like = await Like.findOne({
      where: {
        userId: userId,
        postId: postId
      }
    });
    return like !== null;
  }
  
  // Check if a specific user has saved a specific post
  async function hasUserSavedPost(userId, postId) {
    const savedPost = await SavedPost.findOne({
      where: {
        userId: userId,
        postId: postId
      }
    });
    return savedPost !== null;
  }
  
  // Check if a specific user has subscribed to another specific user (continued)
async function hasUserSubscribedToUser(subscriberId, subscribedId) {
    const subscription = await Subscription.findOne({
      where: {
        subscriberId: subscriberId,
        subscribedId: subscribedId
      }
    });
    return subscription !== null;
  }
  
  // Get the follow record between two specific users, if it exists
  async function getFollowBetweenUsers(followerId, followingId) {
    return await Follow.findOne({
      where: {
        followerId: followerId,
        followingId: followingId
      }
    });
  }
  
  // Get the like record for a specific user on a specific post, if it exists
  async function getLikeForUserOnPost(userId, postId) {
    return await Like.findOne({
      where: {
        userId: userId,
        postId: postId
      }
    });
  }
  
  // Get the saved post record for a specific user on a specific post, if it exists
  async function getSavedPostForUserOnPost(userId, postId) {
    return await SavedPost.findOne({
      where: {
        userId: userId,
        postId: postId
      }
    });
  }
  
  // Get the subscription record between two specific users, if it exists
  async function getSubscriptionBetweenUsers(subscriberId, subscribedId) {
    return await Subscription.findOne({
      where: {
        subscriberId: subscriberId,
        subscribedId: subscribedId
      }
    });
  }
  
  // Get the custom field value for a specific key on a specific post
  async function getCustomFieldValueForKeyOnPost(key, postId) {
    const customField = await CustomField.findOne({
      where: {
        key: key,
        postId: postId
      }
    });
    return customField ? customField.value : null;
  }
  
  // Get the setting value for a specific key for a specific user
  async function getSettingValueForKeyForUser(key, userId) {
    const setting = await Setting.findOne({
      where: {
        key: key,
        userId: userId
      }
    });
    return setting ? setting.value : null;
  }
  
  // Search for users by username
  async function searchUsersByUsername(query) {
    return await User.findAll({
      where: {
        username: {
          [Op.like]: `%${query}%`
        }
      }
    });
  }
  
  // Search for users by email
  async function searchUsersByEmail(query) {
    return await User.findAll({
      where: {
        email: {
          [Op.like]: `%${query}%`
        }
      }
    });
  }
  
  // Search for posts by title (continued)
async function searchPostsByTitle(query) {
    return await Post.findAll({
      where: {
        title: {
          [Op.like]: `%${query}%`
        }
      }
    });
  }
  
  // Search for posts by body
  async function searchPostsByBody(query) {
    return await Post.findAll({
      where: {
        body: {
          [Op.like]: `%${query}%`
        }
      }
    });
  }
  
  // Search for posts by custom field value
  async function searchPostsByCustomFieldValue(key, value) {
    const customFields = await CustomField.findAll({
      where: {
        key: key,
        value: {
          [Op.like]: `%${value}%`
        }
      }
    });
    const postIds = customFields.map(customField => customField.postId);
    return await Post.findAll({
      where: {
        id: {
          [Op.in]: postIds
        }
      }
    });
  }
  
  // Search for tags by name
  async function searchTagsByName(query) {
    return await Tag.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%`
        }
      }
    });
  }
  
  // Update the title of a specific post
  async function updatePostTitle(postId, newTitle) {
    const post = await Post.findByPk(postId);
    if (post) {
      post.title = newTitle;
      await post.save();
    }
  }
  
  // Delete a specific comment
  async function deleteComment(commentId) {
    const comment = await Comment.findByPk(commentId);
    if (comment) {
      await comment.destroy();
    }
  }
  
  // Add a tag to a specific post
  async function addTagToPost(postId, tagId) {
    const post = await Post.findByPk(postId);
    const tag = await Tag.findByPk(tagId);
    if (post && tag) {
      await post.addTag(tag);
    }
  }
  
  // Remove a user from a specific subscription list
  async function removeUserFromSubscriptionList(subscribedId, subscriberId) {
    const subscription = await Subscription.findOne({
      where: {
        subscribedId: subscribedId,
        subscriberId: subscriberId
      }
    });
    if (subscription) {
      await subscription.destroy();
    }
  }
  
  // Find the average number of likes per post
  async function getAvgNumLikesPerPost() {
    const [result] = await Like.findAndCountAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('Like.id')), 'avgLikesPerPost']
      ]
    });
    return result.get('avgLikesPerPost');
  }
  
  // Find the total number of followers for all users
  async function getTotalNumFollowers() {
    const [result] = await Follow.findAndCountAll();
    return result.count;
  }
  
  // Perform a raw SQL query to find the top 10 posts with the most likes
  async function getTop10PostsByNumLikes() {
    const results = await sequelize.query(
      `SELECT "Post"."id", "Post"."title", COUNT("Like"."id") AS "numLikes"
      FROM "Posts" AS "Post"
      LEFT OUTER JOIN "Likes" AS "Like" ON "Post"."id" = "Like"."postId"
      GROUP BY "Post"."id"
      ORDER BY "numLikes" DESC
      LIMIT 10`,
      { type: sequelize.QueryTypes.SELECT }
    );
    return results;
  }
  
  // Find all posts with a specific tag
  async function getPostsWithTag(tagId) {
    return await Post.findAll({
      include: [
        {
          model: Tag,
          where: { id: tagId }
        }
      ]
    });
  }
  
  // Find all comments made by a specific user
  async function getCommentsByUser(userId) {
    return await Comment.findAll({
      where: {
        userId: userId
      }
    });
  }
  
  // Sort posts by their creation date in descending order and return the first 10 results
  async function getLatest10Posts() {
    return await Post.findAll({
      order: [['createdAt', 'DESC']],
      limit: 10
    });
  }
  
  // Return a specific page of search results for posts with a certain title
  async function searchPostsByTitlePaginated(query, page, pageSize) {
    const offset = (page - 1) * pageSize;
    return await Post.findAll({
      where: {
        title: {
          [Op.like]: `%${query}%`
        }
      },
      offset: offset,
      limit: pageSize
    });
  }
  
  // Create a new post and a new tag, and associate the tag with the post, all in a single transaction
  async function createPostWithTag(title, body, tagName) {
    return await sequelize.transaction(async transaction => {
      const post = await Post.create(
        {
          title: title,
          body: body
        },
        { transaction: transaction }
      );
      const tag = await Tag.create(
        {
          name: tagName
        },
        { transaction: transaction }
      );
      await post.addTag(tag, { transaction: transaction });
      return post;
    });
  }
  
  // Run a function before a post is created
  Post.beforeCreate(async post => {
    // Set the createdAt attribute to the current timestamp
    post.createdAt = new Date();
  });
  
  // Run a function after a post is created
  Post.afterCreate(async post => {
    // Send a notification to the post's author
    const author = await post.getAuthor();
    sendNotification(author.id, `Your new post "${post.title}" has been published!`);
  });
  
  // Run a function before a post is updated
  Post.beforeUpdate(async post => {
    // Set the updatedAt attribute to the current timestamp
    post.updatedAt = new Date();
  });
  
  // Run a function after a post is updated
  Post.afterUpdate(async post => {
    // Send a notification to the post's author
    const author = await post.getAuthor();
    sendNotification(
      author.id,
      `Your post "${post.title}" has been updated and republished!`
    );
  });
  
  // Run a function before a post is deleted
  Post.beforeDestroy(async post => {
    // Remove all likes and comments on the post
    await post.setLikes([]);
    await post.setComments([]);
  });
  
  // Run a function after a post is deleted
  Post.afterDestroy(async post => {
    // Send a notification to the post's author
    const author = await post.getAuthor();
    sendNotification(author.id, `Your post "${post.title}" has been deleted.`);
  });
    