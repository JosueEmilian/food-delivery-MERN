const express = require("express");
const bodyParser = require("body-parser");
const cors  = require("cors");

const db = require('./db');

const app = express();
const productoRouter = require('./routes/productoRouter');

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

db.on('error', console.error.bind(console, 'Error de Conexion MongoDB:'))

app.get("/", (req, res) => {
    res.json({message: "Sistema de Delivery Disponible"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en el puerto ${PORT}`);
});
app.use('/api/', productoRouter);