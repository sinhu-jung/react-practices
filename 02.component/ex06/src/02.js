import fs from 'fs';

console.log("=Violation===============================================================================");
let state ={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = state.order;
updateOrder.receive = '부산시 해운대구 우동';

console.log(state.order, updateOrder , state.order === updateOrder);

console.log("=good 1===============================================================================");

state ={
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
updateOrder = Object.assign({}, state.order, { receive: '부산시 해운대구 우동'})

console.log(state.order, updateOrder , state.order === updateOrder);