const {Pool} = require('pg')
const pool = new Pool({
    user: process.env.DB_USER || "jpzkwrcazcughn",
    host: process.env.DB_HOST || "ec2-54-246-87-132.eu-west-1.compute.amazonaws.com",
    database: process.env.DATABASE || "d541utomubjgau",
    password: process.env.DB_PASSWORD || "ce6a8e39de2ffc09d3625853cb651f00ce6823ec97d850d90cead27b0ff2eb3b"
})

module.exports = pool;