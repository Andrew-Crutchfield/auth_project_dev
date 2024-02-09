import { Router } from "express";
import users from "../../db/queries/users";
import { generateHash } from "../../utls/passwords";

const router = Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = generateHash(password);
        await users.insert({ email, password: hashedPassword });
        res.json({ message: 'User successfully registered' });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'An error occurred during the registration process.' });
    }
});

export default router;