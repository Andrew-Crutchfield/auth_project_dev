import * as bycrypt from 'bcrypt';

export function generateHash(password: string) {
    const salt = bycrypt.genSaltSync(12);
    const hash = bycrypt.hashSync(password, salt);
    return hash;
}

export function compareHash(password: string, hashed: string) {
    return bycrypt.compareSync(password, hashed); 
}

