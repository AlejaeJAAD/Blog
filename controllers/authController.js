import User from '../models/User.js'
import { generateToken, verifyToken } from '../auth.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid';

export const login = async (req, res) => {
    const { email, password } = req.body;

    // Find the user with the matching email
    User.findOne({ where: { email: email } }).then(user => {
        // If the user doesn't exist, return an error
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare the password hash to the provided password
        bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        // If the password is correct, create a JWT and send it back to the client
        if (result) {
            // const token = jwt.sign({
            // userId: user.id,
            // email: user.email
            // }, 'secret', { expiresIn: '1h' });
            // res.cookie('jwt', token, { httpOnly: true }).sendStatus(200);
            const refreshToken = uuidv4();
            RefreshToken.create({
                userId: user.id,
                token: refreshToken
            }).then(() => {
            // Set the refresh token as a cookie
            res.cookie('refresh_token', refreshToken, { httpOnly: true });
            // Generate a new JWT and send it back to the client
            const token = jwt.sign({ userId: user.id }, 'secret');
            res.json({ token: token });
            }).catch(error => {
            res.status(500).json({ error: error });
            });
        } else {
            // If the password is incorrect, return an error
            res.status(401).json({ error: 'Invalid email or password' });
        }
        });
    }).catch(error => {
        res.status(500).json({ error: error });
    });
}

export const refresh = async (req, res) => {
    // Get the refresh token from the cookie
    const refreshToken = req.cookies.jwt;

    // If there is no refresh token, return an error
    if (!refreshToken) {
        return res.status(401).json({ error: 'No refresh token' });
    }

    // Verify the refresh token
    jwt.verify(refreshToken, 'secret', (err, user) => {
        if (err) {
        return res.status(403).json({ error: 'Invalid refresh token' });
        }

        // If the refresh token is valid, create a new JWT and send it back to the client
        const token = jwt.sign({
            userId: user.userId,
            email: user.email
        }, 'secret', { expiresIn: '1h' });
        res.cookie('jwt', token, { httpOnly: true }).sendStatus(200);
    });
}

export const refresh_token = async (req, res) => {
    const refreshToken = req.cookies.refresh_token;
    if (!refreshToken) {
        return res.sendStatus(401);
    }

    // Find the refresh token in the database
    RefreshToken.findOne({ where: { token: refreshToken } }).then(token => {
        if (!token) {
        return res.sendStatus(403);
        }

        // Generate a new JWT and send it back to the client
        const newToken = jwt.sign({ userId: token.userId }, 'secret');
        res.json({ token: newToken });
    }).catch(error => {
        res.status(500).json({ error: error });
    });
}
