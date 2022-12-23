import Subscription from '../models/Subscription.js'

export const getSubscriptionById = async (req, res) => {
    return await Subscription.findByPk(id);
}

export const createSubscription = async (req, res) => {
    const subscription = await Subscription.create({ subscriberId, subscribedToId });
    return subscription;
}

export const updateSubscription = async (req, res) => {
    const subscription = await Subscription.findByPk(id);
    if (!subscription) {
        throw new Error('Subscription not found');
    }
    subscription.subscriberId = subscriberId;
    subscription.subscribedToId = subscribedToId;
    await subscription.save();
    return subscription;
}

export const deleteSubscription = async (req, res) => {
    const subscription = await Subscription.findByPk(id);
    if (!subscription) {
        throw new Error('Subscription not found');
    }
    await subscription.destroy();
}

export const getAllSubscriptionsForUser = async (req, res) => {
    return await Subscription.findAll({
        where: {
          subscriberId: subscriberId
        }
    });
}