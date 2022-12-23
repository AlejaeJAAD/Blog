import User from '../models/User.js'
import bcrypt from 'bcrypt'

export const getUsers = async (req, res) => {
    return await User.findAll();
}

export const createUser = async (req, res) => {
    const { email, password, firstname, lastname, nickname } = req.body;

    // Hash the password using bcrypt
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        // Create a new user with the hashed password
        User.create({
            email: email,
            password: hash,
            firstname: firstname,
            lastname: lastname,
            nickname: nickname
        }).then(() => {
            res.status(201).json({ message: 'User created successfully' });
        }).catch(error => {
            res.status(400).json({ error: error });
        });
    });
}

export const updateUser = async (req, res) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    user.username = username;
    user.email = email;
    user.password = password;
    await user.save();
    return user;
}

export const deleteUser = async (req, res) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    await user.destroy();
}

export const getUserById = async (req, res) => {
    return await User.findByPk(id);
}

export const getUserByEmail = async (req, res) => {
    return await User.findOne({
        where: {
          email: email
        }
    });
}

export const getUserByUsername = async (req, res) => {
    return await User.findOne({
        where: {
          nickname: nickname
        }
      });
}