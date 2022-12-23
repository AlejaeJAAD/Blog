import User from '../models/User.js'
import Comment from '../models/Comment.js'

export const getComments = async (req, res) => {
    Comment.findAll({
        include: [
          { model: User, attributes: ['nickname'] },
          { model: Comment, as: 'replies', include: [{ model: User, attributes: ['nickname'] }] }
        ]
      }).then(comments => {
        res.json(comments);
      }).catch(error => {
        res.status(500).json({ error: error });
      });
}

export const getCommentById = async (req, res) => {
    const comment = await Comment.findByPk(id);
    return comment;
}

export const createComment = async (req, res) => {
    Comment.create({
        content: req.body.content,
        userId: req.body.userId,
        postId: req.body.postId,
        parentId: req.body.parentId
      }).then(comment => {
        res.json(comment);
      }).catch(error => {
        res.status(500).json({ error: error });
      });
}
export const updateComment = async (req, res) => {
    const id = req.params.id;
    Comment.findByPk(id).then(comment => {
        if (comment) {
        comment.update(req.body).then(() => {
            res.json(comment);
        }).catch(error => {
            res.status(500).json({ error: error });
        });
        } else {
        res.status(404).json({ error: 'Comment not found' });
        }
    }).catch(error => {
        res.status(500).json({ error: error });
    });
}

export const deleteComment = async (req, res) => {
    const id = req.params.id;
    Comment.findByPk(id).then(comment => {
        if (comment) {
        comment.destroy().then(() => {
            res.json({ message: 'Comment deleted successfully' });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
        } else {
        res.status(404).json({ error: 'Comment not found' });
        }
    }).catch(error => {
        res.status(500).json({ error: error });
    });
}