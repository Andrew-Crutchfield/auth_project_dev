import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import config from "../config";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "No token present" });
    }

    if (typeof config.jwt.secret === 'undefined') {
        console.error('JWT secret is undefined.');
        return res.status(500).json({ message: 'Internal server error: Missing JWT secret.' });
    }

    jwt.verify(token, config.jwt.secret, (err: any, user: any) => {
        if (err) {
            return res.status(403).json({ message: "Token is not valid" });
        }
        req.user = user;
        next();
    });
};