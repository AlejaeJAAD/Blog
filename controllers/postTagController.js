import PostTag from '../models/PostTag.js'

export const getAllPostTag = async (req, res) => {
    const postTags = await Post.findAll();
    return postTags
}

export const createPostTag = async (req, res) => {
    const postTag = await PostTag.create({ postId, tagId });
    return postTag;
}

export const updatePostTag = async (req, res) => {
    const postTag = await PostTag.findByPk(id);
    if (!postTag) {
        throw new Error('Post tag not found');
    }
    postTag.postId = postId;
    postTag.tagId = tagId;
    await postTag.save();
    return postTag;
}

export const deletePostTag = async (req, res) => {
    const postTag = await PostTag.findByPk(id);
    if (!postTag) {
        throw new Error('Post tag not found');
    }
    await postTag.destroy();
}

export const getAllPostTagsForPost = async (req, res) => {
    return await PostTag.findAll({
        where: {
          postId: postId
        }
    });
}