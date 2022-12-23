import BlogCategory from '../models/BlogCategory.js'

export const createBlogCategory = async (req, res) => {
    const blogCategory = await BlogCategory.create({ name });
    return blogCategory;
}

export const getAllBlogCategories = async (req, res) => {
    const blogCategories = await BlogCategory.findAll();
    return blogCategories;
}

export const getBlogCategoryById = async (req, res) => {
    const blogCategory = await BlogCategory.findByPk(id);
    return blogCategory;
}

export const updateBlogCategory = async (req, res) => {
    const blogCategory = await BlogCategory.findByPk(id);
    if (!blogCategory) {
        throw new Error('Blog category not found');
    }
    blogCategory.name = name;
    await blogCategory.save();
    return blogCategory;
}

export const deleteBlogCategory = async (req, res) => {
    const blogCategory = await BlogCategory.findByPk(id);
    if (!blogCategory) {
        throw new Error('Blog category not found');
    }
    await blogCategory.destroy();
}

export const getBlogCategoryByName = async (req, res) => {
    const name = req.params.blogCategoryName
    return await BlogCategory.findOne({
        where: {
          name: name
        }
    });
}