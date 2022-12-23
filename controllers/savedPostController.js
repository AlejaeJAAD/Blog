import SavedPost from '../models/SavedPost.js'

export const getSavedPostById = async (req, res) => {
    return await SavedPost.findByPk(id);
}

export const createSavedPost = async (req, res) => {
    const savedPost = await SavedPost.create({ userId, postId });
    return savedPost;
}
export const updateSavedPost = async (req, res) => {
    const savedPost = await SavedPost.findByPk(id);
    if (!savedPost) {
        throw new Error('Saved post not found');
    }
    savedPost.userId = userId;
    savedPost.postId = postId;
    await savedPost.save();
    return savedPost;
}

export const deleteSavedPost = async (req, res) => {
    const savedPost = await SavedPost.findByPk(id);
    if (!savedPost) {
        throw new Error('Saved post not found');
    }
    await savedPost.destroy();
}

export const getAllSavedPostsForUser = async (req, res) => {
    return await SavedPost.findAll({
        where: {
          userId: userId
        }
    });
}