import Post from '../models/Post.js'
import Comment from '../models/Comment.js'
import Follow from '../models/Follow.js'
import jwt from 'jsonwebtoken'
import lunr from 'lunr'
import Pusher from "pusher"
import request from 'request'

export const getPosts = async (req, res) => {
    // Check for a valid JWT
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: 'No token' });
    }

    // Verify the JWT
    jwt.verify(token, 'secret', (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }

      // If the JWT is valid, get all posts
      const page = req.query.page || 1;
      const title = req.query.title;
      const limit = req.query.limit || 10;
      const offset = (page - 1) * limit;
      const where = {};
      if (title) {
        where.title = { [Op.like]: `%${title}%` };
      }
      Post.findAndCountAll({
        where: where,
        limit: limit,
        offset: offset
      }).then(result => {
        const totalPages = Math.ceil(result.count / limit);
        res.json({
          posts: result.rows,
          totalPages: totalPages
        });
      }).catch(error => {
        res.status(500).json({ error: error });
      });
    })
}

export const getPost = async (req, res) => {
  // Check for a valid JWT
  const { token, userId} = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, get post by id
    Post.findByPk(userId).then(post => {
      res.json(post);
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const flagPost = async (req, res) => {
  const id = req.params.id;
  Post.findByPk(id).then(post => {
    post.increment('flagCount').then(() => {
      res.json({ message: 'Post flagged successfully' });
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  }).catch(error => {
    res.status(404).json({ error: 'Post not found' });
  });
}

export const getPostComments = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, get all comments for the specified post
    const id = req.params.id;
    Comment.findAll({ where: { postId: id } }).then(comments => {
      res.json(comments);
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const createPostComments = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, create a new comment for the specified post
    const id = req.params.id;
    const { text } = req.body;
    Comment.create({
      text: text,
      postId: id,
      userId: user.userId
    }).then(comment => {
      res.json(comment);
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const customFieldPost = async (req, res) => {
  const id = req.params.id;
  Post.findByPk(id).then(post => {
    if (post) {
      CustomField.create({
        name: req.body.name,
        value: req.body.value,
        postId: id
      }).then(customField => {
        res.json(customField);
      }).catch(error => {
        res.status(500).json({ error: error });
      });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  }).catch(error => {
    res.status(500).json({ error: error });
  });
}

export const locationPost = async (req, res) => {
  const id = req.params.id;
  Post.findByPk(id).then(post => {
    if (post) {
      const address = encodeURIComponent(post.location);
      request(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const data = JSON.parse(body);
          if (data.status === 'OK') {
            res.json(data.results[0].geometry.location);
          } else {
            res.status(400).json({ error: data.error_message });
          }
        } else {
          res.status(500).json({ error: error });
        }
      });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  }).catch(error => {
    res.status(500).json({ error: error });
  });
}

export const deleteComment = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, delete the specified comment
    const id = req.params.id;
    Comment.findByPk(id).then(comment => {
      if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
      }
      if (comment.userId !== user.userId) {
        return res.status(403).json({ error: 'Not authorized' });
      }
      comment.destroy().then(() => {
        res.sendStatus(204);
      }).catch(error => {
        res.status(500).json({ error: error });
      });
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const uploadMedia = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, upload the file to the server
    const file = req.files.file;
    file.mv(`${__dirname}/public/${file.name}`, err => {
      if (err) {
        return res.status(500).send(err);
      }
      res.sendStatus(200);
    });
  });
}

export const searchPost = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, search for posts by keyword
    const keyword = req.query.keyword;
    Post.findAll({ where: { title: { [Op.like]: `%${keyword}%` } } }).then(posts => {
      res.json(posts);
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

//Lunr
const index = lunr(function() {
  this.field('title');
  this.field('content');
  // Add other fields as needed
});

export const searchLunr = async (req, res) => {
  // Add documents to the index
  Post.findAll().then(posts => {
    posts.forEach(post => {
      index.add({
        id: post.id,
        title: post.title,
        content: post.content
        // Add other fields as needed
      });
    });
  });

  const query = req.query.q;
  const results = index.search(query);
  res.json(results);
}

//Push notifications
const pusher = new Pusher({
  appId: "1526432",
  key: "e6e37b288011b3c909af",
  secret: "487149236df31f800b07",
  cluster: "us3",
  useTLS: true
});

// Send a notification when a new comment is created
Comment.afterCreate(comment => {
  pusher.trigger('comments', 'new-comment', {
    comment: comment
  });
});

// Send a notification when a new follow is created
Follow.afterCreate(follow => {
  pusher.trigger('follows', 'new-follow', {
    follow: follow
  });
});

export const likePost = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, like the specified post
    const { postId } = req.body;
    Like.create({
      userId: user.userId,
      postId: postId
    }).then(like => {
      res.json(like);
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const followPost = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, follow the specified user
    const { followId } = req.body;
    Follow.create({
      userId: user.userId,
      followId: followId
    }).then(follow => {
      res.json(follow);
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const getOwnPosts = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, get all of the user's posts
    const id = req.params.id;
    Post.findAll({ where: { userId: id } }).then(posts => {
      res.json(posts);
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const createPost = async (req, res) => {
    const image = req.file.path;
    // Check for a valid JWT
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: 'No token' });
    }

    // Verify the JWT
    jwt.verify(token, 'secret', (err, user) => {
      if (err) {
        return res.status(403).json({ error: 'Invalid token' });
      }

      // If the JWT is valid, create a new post
      const { title, content, userId, blogCategoryId, categoryId } = req.body;
      Post.create({
        title: title,
        content: content,
        userId: userId,
        blogCategoryId: blogCategoryId,
        categoryId: categoryId,
        image: image
      }).then(post => {
        res.status(201).json(post);
      }).catch(error => {
        res.status(400).json({ error: error });
      });
    });
}

export const updatePost = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, update the post with the specified ID
    const id = req.params.id;
    Post.findByPk(id).then(post => {
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Only allow the post's author to update the post
      if (post.userId !== user.userId) {
        return res.status(403).json({ error: 'Not authorized' });
      }

      // Update the post
      const { title, content, userId, blogCategoryId, categoryId } = req.body;
      post.update({
        title: title,
        content: content,
        userId: userId,
        blogCategoryId: blogCategoryId,
        categoryId: categoryId
      }).then(() => {
        res.json(post);
      }).catch(error => {
        res.status(400).json({ error: error });
      });
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const deletePost = async (req, res) => {
  // Check for a valid JWT
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ error: 'No token' });
  }

  // Verify the JWT
  jwt.verify(token, 'secret', (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }

    // If the JWT is valid, delete the post with the specified ID
    const id = req.params.id;
    Post.findByPk(id).then(post => {
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }

      // Only allow the post's author to delete the post
      if (post.userId !== user.userId) {
        return res.status(403).json({ error: 'Not authorized' });
      }

      // Delete the post
      post.destroy().then(() => {
        res.sendStatus(204);
      }).catch(error => {
        res.status(500).json({ error: error });
      });
    }).catch(error => {
      res.status(500).json({ error: error });
    });
  });
}

export const getAllPostsForBlogCategory = async (req, res) => {
  return await Post.findAll({
    where: {
      blogCategoryId: blogCategoryId
    }
  });
}

export const getAllPostsForCategory = async (req, res) => {
  return await Post.findAll({
    where: {
      categoryId: categoryId
    }
  });
}

export const getAllPostsForUser = async (req, res) => {
  return await Post.findAll({
    where: {
      userId: userId
    }
  });
}