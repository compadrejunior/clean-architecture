import dotenv from 'dotenv';

dotenv.config();
if (!process.env.MONGO_URI) throw new Error('Error: missing MONGO_URI');
if (!process.env.SERVER_PORT) throw new Error('Error: missing SERVER_PORT');

export type Config = {
  MONGO_URI: string;
  SERVER_PORT: string;
};

const config: Config = {
  MONGO_URI: process.env.MONGO_URI,
  SERVER_PORT: process.env.SERVER_PORT,
};

export default config;
