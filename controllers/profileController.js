import Profile from '../models/Profile.js'
import User from '../models/User.js'

export const getAllProfiles = async (req, res) => {
    return await Profile.findAll();
}

export const createProfile = async (req, res) => {
    const profile = await Profile.create({ bio, imageUrl, userId });
    return profile;
}

export const getProfile = async (req, res) => {
    const id = req.params.id;
    Profile.findOne({
        where: { userId: id },
        include: [{ model: User, attributes: ['nickname'] }]
    }).then(profile => {
        if (profile) {
            res.json(profile);
        } else {
            res.status(404).json({ error: 'Profile not found' });
        }
    }).catch(error => {
        res.status(500).json({ error: error });
    });
}

export const updateProfile = async (req, res) => {
    const id = req.params.id;
    Profile.findOne({
        where: { userId: id }
    }).then(profile => {
        if (profile) {
        profile.update(req.body).then(() => {
            res.json(profile);
        }).catch(error => {
            res.status(500).json({ error: error });
        });
        } else {
        res.status(404).json({ error: 'Profile not found' });
        }
    }).catch(error => {
        res.status(500).json({ error: error });
    });
}

export const deleteProfile = async (req, res) => {
    const profile = await Profile.findByPk(id);
    if (!profile) {
        throw new Error('Profile not found');
    }
    await profile.destroy();
}

export const getProfileByUserId = async (req, res) => {
    return await Profile.findOne({
        where: {
          userId: userId
        }
    });
}