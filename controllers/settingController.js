import Setting from '../models/Setting.js'

export const createSetting = async (req, res) => {
    const setting = await Setting.create({ name, value, userId });
    return setting;
}

export const updateSetting = async (req, res) => {
    const setting = await Setting.findByPk(id);
    if (!setting) {
        throw new Error('Setting not found');
    }
    setting.name = name;
    setting.value = value;
    setting.userId = userId;
    await setting.save();
    return setting;
}

export const deleteSetting = async (req, res) => {
    const setting = await Setting.findByPk(id);
    if (!setting) {
        throw new Error('Setting not found');
    }
    await setting.destroy();
}

export const getAllSettingsForUser = async (req, res) => {
    return await Setting.findAll({
        where: {
          userId: userId
        }
    });
}

export const getSettingByNameForUser = async (req, res) => {
    return await Setting.findOne({
        where: {
          name: name,
          userId: userId
        }
    });
}