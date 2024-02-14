import { Router } from "express";
import users from "../../db/queries/users";
import { compareHash } from "../../utls/passwords";
import * as jwt from 'jsonwebtoken';
import { UsersTable } from "../../db/models";
import config from "../../config";

const router = Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const usersFound = await users.find('email', email) as UsersTable[];
        const user = usersFound[0];

        if (user && compareHash(password, user.password)) {
            // Ensure the JWT secret is not undefined
            if (typeof config.jwt.secret === 'undefined') {
                console.error('JWT secret is undefined.');
                return res.status(500).json({ message: 'Internal server error.' });
            }

            // Use the JWT secret confidently as we've checked it's not undefined
            const token = jwt.sign({ userid: user.id, email: user.email }, config.jwt.secret, { expiresIn: config.jwt.expiration });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during the login process.' });
    }
});

export default router;