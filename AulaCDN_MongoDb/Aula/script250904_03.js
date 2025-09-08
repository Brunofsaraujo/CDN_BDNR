use("Escola");

// operadores logicos

// $and
// $not
// $nor - retorna os documentos (registro) que nao correspondem a consulta
// $or

// db.Inventario.insertMany(
//     [
//         {
//             _id: 1,
//             item: {
//                 name: "ab", code: "123"
//             },
//             qty: 15,
//             tags: ["A", "B", "C"]
//         }
//     ]
// );

// db.Inventario.insertMany(
//     [
//         {
//             _id: 2,
//             item: {
//                 name: "cd", code: "123"
//             },
//             qty: 20,
//             tags: ["A"]
//         },
//         {
//             _id: 3,
//             item: {
//                 name: "ij", code: "456"
//             },
//             qty: 25,
//             tags: ["A", "B"]
//         },
//         {
//             _id: 4,
//             item: {
//                 name: "xj", code: "456"
//             },
//             qty: 25,
//             tags: ["A", "B"]
//         },
//     ]
// );

// printjson(db.Inventario.find({ "item.name": { $eq: "ab" } }, { _id: 0, qty: 1 }));

// printjson(db.Inventario.find({ 'tags[2]': 'C' }));

// console.log(db.Inventario.find());

// $and

// console.log(
//     db.Inventario.find({
//         $and: [{ qty: { $gt: 24 } }, { qty: { $lt: 30 } }, { "item.name": { $eq: "ij" } }]
//     })
// );

// $or

// console.log(
//     db.Inventario.find({
//         $or: [{ qty: { $gt: 70 } }, { qty: { $lt: 20 } }]
//     })
// );

// $nor

// console.log(
//     db.Inventario.find({
//         $nor: [{ qty: { $gt: 20 } }, { "item.name": { $eq: "ab" } }]
//     })
// );

// $not - coluna: {$not:valor}

// console.log(
//     db.Inventario.find({
//         "item.name": { $not: { $eq: "ab" } }
//     })
// );