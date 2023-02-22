import dotenv from 'dotenv'
dotenv.config()

const POSTGRESQL_HOST = process.env?.POSTGRESQL_HOST || 'localhost';
const POSTGRESQL_USERNAME: string = process.env?.POSTGRESQL_USERNAME || 'postgres';
const POSTGRESQL_PASSWORD: string = process.env?.POSTGRESQL_PASSWORD || '';
const POSTGRESQL_DATABASE: string = process.env?.POSTGRESQL_DATABASE || '';

const BOT_TOKEN: any = process.env.BOT_TOKEN

export {
    BOT_TOKEN,
    POSTGRESQL_HOST,
    POSTGRESQL_USERNAME,
    POSTGRESQL_PASSWORD,
    POSTGRESQL_DATABASE
}