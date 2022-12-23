import Category from '../models/Category.js'

export const createCategory = async (req, res) => {
    const categoryName = req.body.categoryName
    const category = await Category.create({ categoryName });
    return category;
}

export const getAllCategories = async (req, res) => {
    const categories = await Category.findAll();
    return categories;
}

export const getCategoryById = async (req, res) => {
    const category = await Category.findByPk(id);
    return category;
}

export const updateCategory = async (req, res) => {
    const category = await Category.findByPk(id);
    if (!category) {
        throw new Error('Category not found');
    }
    category.name = name;
    await category.save();
    
}

export const deleteCategory = async (req, res) => {
    const category = await Category.findByPk(id);
    if (!category) {
        throw new Error('Category not found');
    }
    await category.destroy();
}

export const getCategoryByName = async (req, res) => {
    return await Category.findOne({
        where: {
          name: name
        }
    });
}