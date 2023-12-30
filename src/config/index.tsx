
import dotenv from 'dotenv';

dotenv.config( { path: '../../.env.production' });

type Config = {
    NEXT_API_BASEURL: string | undefined;
    NEXT_API_KEY: string | undefined;
    // Add more variables as needed
};

const config: Config = {
    // Define your configuration variables here
    NEXT_API_BASEURL: process.env.API_URL,
    NEXT_API_KEY: process.env.API_KEY,
    // Add more variables as needed
};

export default config;
