import Like from '../models/Like.js'

export const getAllLikes = async (req, res) => {
    const likes = await Like.findAll();
    return likes;
}

export const getLikeById = async (req, res) => {
    const like = await Like.findByPk(id);
    return like;
}

export const createLike = async (req, res) => {
    const like = await Like.create({ userId, postId });
    return like;
}

export const updateLike = async (req, res) => {
    const like = await Like.findByPk(id);
    if (!like) {
        throw new Error('Like not found');
    }
    like.userId = userId;
    like.postId = postId;
    await like.save();
    return like;
}

export const deleteLike = async (req, res) => {
    const like = await Like.findByPk(id);
    if (!like) {
        throw new Error('Like not found');
    }
    await like.destroy();
}

export const getAllLikesForPost = async (req, res) => {
    return await Like.findAll({
        where: {
          postId: postId
        }
    });
}

export const hasUserLikedPost = async (req, res) => {
    const like = await Like.findOne({
        where: {
          userId: userId,
          postId: postId
        }
    });
    return like ? true : false;
}