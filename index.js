"use strict"
/* -----------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
----------------------------------------------- */

const express = require("express")
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

/* -------------------------------------------------------------------------- */

// Accept JSON
app.use(express.json())

// DB Connection
// const dbConnection = require('./src/dbConnection')
// dbConnection()
require('./src/dbConnection')()


app.all('/', (req, res) => {
        res.send('WELCOME TO BLOG API')
})

app.use(require('./src/middlewares/errorHandler'))

/* -------------------------------------------------------------------------- */

app.listen(PORT, () => console.log('Running on http://127.0.0.1:' + PORT))