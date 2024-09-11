"use strict"
/* -----------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
----------------------------------------------- */

// Mongoose
// $ npm i mongoose

// Database connection
const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect(process.env?.MONGODB || 'mongodb+srv://edabeyzaozeren:XGNULWMGgB6JaEpg@cluster0.15it6c7.mongodb.net/blogAPI')
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB is Not Connected *'))
}

module.exports = dbConnection