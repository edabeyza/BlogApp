"use strict"
/* -----------------------------------------------
        BLOG APP With Express JS
----------------------------------------------- */

const router = require('express').Router()
const {blogCategoryController, blogPostContoller} = require('../controllers/blogController')
// Blog Router


// Blog Category
router.route('/category')
    .get(blogCategoryController.list)
    .post(blogCategoryController.create)

router.route('/category/:id')
    .get(blogCategoryController.read)
    .put(blogCategoryController.update)
    .delete(blogCategoryController.delete)

// Blog Post
router.route('/post')
    .get(blogPostContoller.list)
    .post(blogPostContoller.create)

router.route('/post/:id')
    .get(blogPostContoller.read)
    .put(blogPostContoller.update)
    .delete(blogPostContoller.delete)

router.all('/', (req, res) => {
    res.send('Welcome to the BlogAPP')
})

module.exports = router