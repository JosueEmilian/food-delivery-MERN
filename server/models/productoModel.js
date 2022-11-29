const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SchemaCategorias = new Schema(
    {
        nombre: {type: String, required: true}
    }
)

const SchemaProductos = new Schema(
    {
        nombre: {type: String, required: true},
        caracteristica: {type: String, required: true},
        descripcion: {type: String, required: true},
        precio: {type: String, required: true},
        categoria: {type: String, required: true}
    }
)

module.exports = mongoose.model('Producto', SchemaProductos)
