import CustomField from '../models/CustomField'

export const getAllCustomField = async (req, res) => {
    const customFields = await CustomField.findAll();
    return customFields;
}

export const getCustomFieldById = async (req, res) => {
    const customField = await CustomField.findByPk(id);
    return customField;
}

export const updateCustomField = async (req, res) => {
    const id = req.params.id;
    await CustomField.findByPk(id).then(customField => {
        if (customField) {
            customField.update(req.body).then(() => {
            res.json(customField);
        }).catch(error => {
            res.status(500).json({ error: error });
        });
        } else {
        res.status(404).json({ error: 'Custom field not found' });
        }
    }).catch(error => {
        res.status(500).json({ error: error });
    });
}

export const deleteCustomField = async (req, res) => {
    const id = req.params.id;
    CustomField.findByPk(id).then(customField => {
        if (customField) {
        customField.destroy().then(() => {
            res.json({ message: 'Custom field deleted successfully' });
        }).catch(error => {
            res.status(500).json({ error: error });
        });
        } else {
        res.status(404).json({ error: 'Custom field not found' });
        }
    }).catch(error => {
        res.status(500).json({ error: error });
    });
}

export const getAllCustomFieldsForUser = async (req, res) => {
    return await CustomField.findAll({
        where: {
          userId: userId
        }
    });
}

export const getCustomFieldByNameForUser = async (req, res) => {
    return await CustomField.findOne({
        where: {
          name: name,
          userId: userId
        }
    });
}