"use strict"
/* -----------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
----------------------------------------------- */

// Mongoose
// $ npm i mongoose

// Database connection
const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB is Not Connected *'))
}

module.exports = dbConnection