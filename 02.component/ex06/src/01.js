import fs from 'fs';

console.log("=Violation===============================================================================");
let state ={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateProducts = state.order.products;
updateProducts.push({
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
});

console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("=good 1===============================================================================");

state ={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateProducts = state.order.products.concat({
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
})


console.log(state.order.products, updateProducts, state.order.products === updateProducts);

console.log("==good 2================================================================================");

state ={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

updateProducts = [...state.order.products, {
    "no": "s002-002",
    "name": "블루 양말",
    "price": 2000,
    "amount": 1
}]


console.log(state.order.products, updateProducts, state.order.products === updateProducts);