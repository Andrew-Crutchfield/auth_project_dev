export interface UsersTable {
    id: number;
    email: string;
    password: string;
    created_at: Date;
}

export interface mysqlResponse {
    affectedRows: number;
    insertId: number;
}
