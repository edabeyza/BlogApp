"use strict"
/* -----------------------------------------------
        BLOG APP With Express JS
----------------------------------------------- */

const express = require('express');
const app = express()

// Dotenv dosyasını okumak için
require('dotenv').config()
const PORT = process.env.PORT || 8000

// Db Connection
require('./src/dbConnection')()

// Express async errors
require('express-async-errors')


// JSON datayı okuması çin
app.use(express.json())

// Router
app.use(require('./src/routes/blogRouter'))

// Error Handler
app.use(require('./src/middlewares/errorHandler'))

// Serverı çalıştırdık
app.listen(PORT, () => console.log('Listening on http://127.0.0.1:' + PORT))