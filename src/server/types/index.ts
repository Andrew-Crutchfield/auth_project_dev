

export interface Payload {
    userid: number;
    email: string;
}

declare global {
    namespace Express {
        export interface Request {
            user: Payload;
        }
    }
}