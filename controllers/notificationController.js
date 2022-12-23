import Notification from '../models/Notification'

export const getAllNotifications = async (req, res) => {
    const notifications = await Notification.findAll();
    return notifications;
}

export const getNotificationById = async (req, res) => {
    const notification = await Notification.findByPk(id);
    return notification;
}

export const createNotification = async (req, res) => {
    const notification = await Notification.create({ content, userId });
    return notification;
}

export const updateNotification = async (req, res) => {
    const notification = await Notification.findByPk(id);
    if (!notification) {
        throw new Error('Notification not found');
    }
    notification.content = content;
    notification.userId = userId;
    await notification.save();
    return notification;
}

export const deleteNotification = async (req, res) => {
    const notification = await Notification.findByPk(id);
    if (!notification) {
        throw new Error('Notification not found');
    }
    await notification.destroy();
}

export const getAllNotificationsForUser = async (req, res) => {
    return await Notification.findAll({
        where: {
          userId: userId
        }
    });
}