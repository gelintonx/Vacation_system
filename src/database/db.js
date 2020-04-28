const {Pool} = require('pg')
const pool = new Pool({
    user: process.env.DB_USER || "jwzqvdzyoyyeti",
    host: process.env.DB_HOST || "ec2-54-75-244-161.eu-west-1.compute.amazonaws.com",
    database: process.env.DATABASE || "d4kp8et36pmkfo",
    password: process.env.DB_PASSWORD || "93260bd4c555e083a4ca55a37c6f5eac65fe4388f825cdf8149e07910465b4cd"
})

module.exports = pool;