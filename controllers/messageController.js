import Message from '../models/Message.js'

export const getAllMessages = async (req, res) => {
    const messages = await Message.findAll();
    return messages;
}

export const getMessageById = async (req, res) => {
    const message = await Message.findByPk(id);
    return message;
}

export const createMessage = async (req, res) => {
    const { content, senderId,receiverId } = req.body
    const message = await Message.create({ content, senderId, receiverId });
    return message;
}

export const updateMessage = async (req, res) => {
    const message = await Message.findByPk(id);
    if (!message) {
        throw new Error('Message not found');
    }
    message.content = content;
    message.senderId = senderId;
    message.receiverId = receiverId;
    await message.save();
    return message;
}

export const deleteMessage = async (req, res) => {
    const message = await Message.findByPk(id);
    if (!message) {
        throw new Error('Message not found');
    }
    await message.destroy();
}

export const getAllMessagesSentByUser = async (req, res) => {
    return await Message.findAll({
        where: {
          senderId: userId
        }
    });
}

export const getAllMessagesReceivedByUser = async (req, res) => {
    return await Message.findAll({
        where: {
          receiverId: userId
        }
    });
}