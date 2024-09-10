"use strict"
/* -----------------------------------------------
        BLOG APP With Express JS
----------------------------------------------- */

// Database bağlantısı
const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect(process.env.MONGODB || 'mongodb+srv://edabeyzaozeren:XGNULWMGgB6JaEpg@cluster0.15it6c7.mongodb.net/blogApp')
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('-- DB is Not Connected -- '))
}

