"use strict"
/* -----------------------------------------------
        BLOG APP With Express JS
----------------------------------------------- */

const mongoose = require('mongoose')
// Blog Model

const BlogCategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    }
},{
    collection: 'blogCategories',
    timestamps:true
})

const BlogPostSchema = new mongoose.Schema({

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BlogCategory',
        required: true
    },

    title: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    content: {
        type: String,
        trim: true,
        required: true
    }
},{
    collection: 'blogPost',
    timestamps: true
})
module.exports = {
    BlogPost: mongoose.model('BlogPost', BlogPostSchema), 
    BlogCategory: mongoose.model('BlogCategory', BlogCategorySchema)} 

/* -------------------------------------------------------------*/
