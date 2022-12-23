import Follow from '../models/Follow.js'
import User from '../models/User.js'

export const getAllFollow = async (req, res) => {
    const follows = await Follow.findAll();
    return follows;
}

export const getFollowById = async (req, res) => {
    const follow = await Follow.findByPk(id);
    return follow;
}

export const createFollow = async (req, res) => {
    const { followerId, followingId } = req.body
    const follow = await Follow.create({ followerId, followingId });
    return follow;
}

export const updateFollow = async (req, res) => {
    const follow = await Follow.findByPk(id);
    if (!follow) {
        throw new Error('Follow not found');
    }
    follow.followerId = followerId;
    follow.followingId = followingId;
    await follow.save();
    return follow;
}

export const deleteFollow = async (req, res) => {
    const follow = await Follow.findByPk(id);
    if (!follow) {
        throw new Error('Follow not found');
    }
    await follow.destroy();
}

export const getAllUsersFollowedByUser = async (req, res) => {
    const follows = await Follow.findAll({
        where: {
          followerId: userId
        }
    });
    const followedUserIds = follows.map(follow => follow.followingId);
    return await User.findAll({
        where: {
          id: followedUserIds
        }
    });
}

export const getAllUsersFollowingUser = async (req, res) => {
    const follows = await Follow.findAll({
        where: {
          followingId: userId
        }
    });
    const followerIds = follows.map(follow => follow.followerId);
    return await User.findAll({
        where: {
          id: followerIds
        }
    });
}

// Check if a specific user is following another user
export const isUserFollowingUser = async (req, res) => {
    const follow = await Follow.findOne({
        where: {
          followerId: followerId,
          followingId: followingId
        }
    });
    return follow ? true : false;
}