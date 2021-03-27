require('dotenv').config()

const config = {
  PORT: process.env.port || 3000,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  DB_NAME: process.env.DB_NAME
}

module.exports = { config }