import NewsLetter from '../models/NewsLetter'

export const getAllNewsLetter = async (req, res) => {
    const newsletters = await NewsLetter.findAll();
    return newsletters;
}

export const getNewsLetterById = async (req, res) => {
    const newsletter = await NewsLetter.findByPk(id);
    return newsletter;
}

export const createNewsLetter = async (req, res) => {
    const newsletter = await NewsLetter.create({ email, userId });
    return newsletter;
}

export const updateNewsLetter = async (req, res) => {
    const newsletter = await NewsLetter.findByPk(id);
    if (!newsletter) {
        throw new Error('News letter not found');
    }
    newsletter.email = email;
    newsletter.userId = userId;
    await newsletter.save();
    return newsletter;
}

export const deleteNewsLetter = async (req, res) => {
    const newsletter = await NewsLetter.findByPk(id);
    if (!newsletter) {
        throw new Error('News letter not found');
    }
    await newsletter.destroy();
}

export const getAllNewsLetterSubscribers = async (req, res) => {
    return await NewsLetter.findAll();
}