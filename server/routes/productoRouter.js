const express = require('express')

const router = express.Router()

const Producto = require('../models/productoModel')

router.get('/productos', async (req, res) => {
    try {
        const productos = await Producto.find()
        res.status(200).send({ data: productos})
    } catch (err) {
        res.status(400).send({error: err})
    }
})

router.get('/productos-by-categorias', async(req, res) => {
    try {
        const productos = await Producto.aggregate([
            {$match: {}},
            {$group: {
                _id: '$categoria',
                productos: {$push: '$$ROOT'}
            }},
            {$project: {nombre: '$_id', productos: 1, _id: 0}}
        ])
        res.status(200).send({data: productos})
    } catch (err) {
        res.status(400).send({error: err})
    }
})
module.exports = router