const pgp = require("pg-promise")({});

const dotenv = require("dotevn");

dotenv.config();

const db = pgp(process.env.DATABASE_URL);

module.exports = db; 
