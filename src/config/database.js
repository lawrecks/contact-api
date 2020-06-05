const env = require('./environment');


const defaultConfig = {
    database : env.DATABASE,
    dialect : env.DATABASE_DIALECT || "postgres",
    use_env_variables : "DATABASE_URL",
    username : env.USERNAME,
    password : env.PASSWORD
};

const database = {
    development : {
        ...defaultConfig
    },
    test : {
        ...defaultConfig
    },
    production : {
        ...defaultConfig
    }
};

module.exports = database;