"use strict"
/* -----------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
----------------------------------------------- */

module.exports = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500

    console.log('ErrorHandler worked.')

    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause
        // stack: err.stack

    })
}