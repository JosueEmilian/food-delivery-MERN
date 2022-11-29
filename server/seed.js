//UTILIZANDO faker js --> datos fakes para probar la db
const {faker} = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main(){
    const uri = "mongodb://localhost://27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const coleccionProductos  = client.db("food-delivery").collection("productos");
        const coleccionCategorias = client.db("food-delivery").collection("categorias");

        coleccionProductos.drop();
        let categorias = ['desayuno','almuerzo', 'cena', 'bebidas'].map((categoria) => {return {nombre: categoria}});
        await coleccionCategorias.insertMany(categorias);

        let imageUrls = [
            'https://res.cloudinary.com/dwnqigxip/image/upload/v1669350418/delivery-app/food-restaurant3_mzmnrw.png',
            'https://res.cloudinary.com/dwnqigxip/image/upload/v1669695392/delivery-app/food-restaurant2_qedbbd.png',
            'https://res.cloudinary.com/dwnqigxip/image/upload/v1669350414/delivery-app/food-restaurant1_ddxord.png',
        ]

        let productos = [];
        for (let i = 0; i < 10; i++){
            let nuevoProducto = {
                nombre: faker.commerce.productName(),
                caracteristica: faker.commerce.productAdjective(),
                descripcion: faker.commerce.productDescription(),
                precio: faker.commerce.price(),
                categoria: _.sample(categorias),
                imageUrl: _.sample(imageUrls)
            };
            productos.push(nuevoProducto);
        }
        await coleccionProductos.insertMany(productos);
    } catch (e) {
        console.error(e)
    } finally{
        await client.close();
    }
}

main();