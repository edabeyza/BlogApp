"use strict"
/* -----------------------------------------------
        BLOG APP With Express JS
----------------------------------------------- */

module.exports = (err, req, res, next) => {
    const errorStatusCode = res.errorStatusCode ?? 500

    console.log('ErrorHandler çalıştı.')

    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause
        // stack: err.stack

    })
}