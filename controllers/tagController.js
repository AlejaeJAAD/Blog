import Tag from '../models/Tag.js'

export const createTag = async (req, res) => {
    const tag = await Tag.create({ name });
    return tag;
}

export const updateTag = async (req, res) => {
    const tag = await Tag.findByPk(id);
    if (!tag) {
        throw new Error('Tag not found');
    }
    tag.name = name;
    await tag.save();
    return tag;
}

export const deleteTag = async (req, res) => {
    const tag = await Tag.findByPk(id);
    if (!tag) {
        throw new Error('Tag not found');
    }
    await tag.destroy();
}

export const getAllTags = async (req, res) => {
    return await Tag.findAll();
}

export const findTagByName = async (req, res) => {
    return await Tag.findOne({
        where: {
          name: name
        }
    });
}