require('dotenv').config();

const env = {
    PORT : process.env.PORT || 5000,
    USERNAME : process.env.DATABASE_USERNAME,
    PASSWORD : process.env.DATABASE_PASSWORD,
    DATABASE : 
        process.env.NODE_ENV == "test"
            ? process.env.DATABASE_NAME_TEST : process.env.DATABASE_NAME,
    NODE_ENV : process.env.NODE_ENV || "production"
};

module.exports = env;