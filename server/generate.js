const { faker } = require('@faker-js/faker');

let database = { products: [] };

for (let i = 0; i < 20; i++) {
    database.products.push({
        "id": i+1,
        "nombre": faker.commerce.productName(),
        "descripcion": faker.lorem.sentence(),
        "precio": faker.commerce.price(),
        "cantidad": faker.random.numeric(),
    });
}

console.log(JSON.stringify(database));