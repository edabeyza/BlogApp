"use strict"
/* -----------------------------------------------
        BLOG APP With Express JS
----------------------------------------------- */
// Blog Controller

const {BlogCategory, BlogPost} = require('../models/blogModel')

module.exports.blogCategoryController = {

    list: async (req, res) => {

        const data = await BlogCategory.find()

        res.status(200).send({
            error:false,
            result: data
        })
    },

    // CRUD

    create: async (req, res) => {

        const data = await BlogCategory.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },

    read: async (req, res) => {

        const data = await BlogCategory.findOne({ _id: req.params.id})

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        const data = await BlogCategory.updateOne({ _id: req.params.id },req.body)

        res.status(202).send({
            error:false,
            result:data,
            new: await BlogCategory.findOne({ _id: req.params.id})
        })
    },

    delete: async (req, res) => {

        const data = await BlogCategory.deleteOne({ _id:req.params.id })

        if (data.deletedCount){
            res.sendStatus(204)
        } else {
            res.errorStatusCode = 404
            throw new Error('Not Found')
        }
    }
}

module.exports.blogPostContoller = {
    list: async (req, res) => {

        const data = await BlogPost.find()

        res.status(200).send({
            error:false,
            result: data
        })
    },

    // CRUD

    create: async (req, res) => {

        const data = await BlogPost.create(req.body)

        res.status(201).send({
            error: false,
            result: data
        })
    },

    read: async (req, res) => {

        const data = await BlogPost.findOne({ _id: req.params.id})

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        const data = await BlogPost.updateOne({ _id: req.params.id },req.body)

        res.status(202).send({
            error:false,
            result:data,
            new: await BlogPost.findOne({ _id: req.params.id})
        })
    },

    delete: async (req, res) => {

        const data = await BlogPost.deleteOne({ _id:req.params.id })

        if (data.deletedCount){
            res.sendStatus(204)
        } else {
            res.errorStatusCode = 404
            throw new Error('Not Found')
        }
    }

}

/* -------------------------------------------------*/