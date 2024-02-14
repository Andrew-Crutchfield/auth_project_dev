import * as mysql from 'mysql';

// Removed unused imports 'query' from 'express' and 'resolve' from 'path'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'andrewcrutchfield',
    password: 'cawl_admech',
    database: 'the_key_to_auth'
});

// Removed the generic type <T = any> since it was not being utilized in a meaningful way in this context
export const Query = <T =any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) { 
                reject(err);
            } else {
                resolve(results);
            }
        })
    });
}

import users from './queries/users';

export default {
    users
}