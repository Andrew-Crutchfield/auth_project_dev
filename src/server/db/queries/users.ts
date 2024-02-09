import { Query } from '../';
import { UsersTable, mysqlResponse } from '../models';

const find = (column: string, value: string) => Query<UsersTable[]>('SELECT * FROM users WHERE ?? = ?', [column, value]);

const insert = (user: { email: string; password: string }) => Query<mysqlResponse>('INSERT INTO users SET ?', user);

export default {
    find,
    insert
};