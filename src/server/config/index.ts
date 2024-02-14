import dotenv from 'dotenv';
dotenv.config();

interface Config {
    port: number;
    db: {
        host: string;
        port: number;
        name: string;
        user: string;
        password: string;
    };
    jwt: {
        secret: string | undefined;
        expiration: string | undefined;
    };
}

const config: Config = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
        name: process.env.DB_NAME || 'mydatabase',
        user: process.env.DB_USER || 'myuser',
        password: process.env.DB_PASSWORD || 'mypassword',
    },
    jwt: {
        secret: process.env.ACCESS_TOKEN_SECRET as string,
        expiration: process.env.ACCESS_TOKEN_EXPIRATION,
    },
};


if (!config.jwt.secret) {
    console.log('JWT signing secret missing - crashing server!')
    process.exit(1);
};
export default config;