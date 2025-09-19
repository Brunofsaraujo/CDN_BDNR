use("Escola")

// db.books.insertMany([
//     {
//         "_id": 1,
//         "item": "TBD",
//         "stock": 0,
//         "info": { "publisher": "1111", "pages": 430 },
//         "tags": ["technology", "computer"],
//         "ratings": [{ "by": "ijk", "rating": 4 }, { "by": "lmn", "rating": 5 }],
//         "reorder": false
//     },
//     {
//         "_id": 2,
//         "item": "XYZ123",
//         "stock": 15,
//         "info": { "publisher": "5555", "pages": 150 },
//         "tags": [],
//         "ratings": [{ "by": "xyz", "rating": 5 }],
//         "reorder": false
//     }
// ]);

//alterar
// upateOne ({}, {$set: {<colune>,<coluna>}})
// db.books.updateOne(
//     { _id: 1 },
//     {
//         $set: { item: "Modificado" }
//     }
// )

// db.books.updateOne(
//     { _id: 1 },
//     {
//         $set: {
//             item: "Mod",
//             "info.publisher": '123'
//         }
//     }
// )

// db.books.updateOne(
//     { _id: 1 },
//     {
//         $set: {
//             item: "Mod",
//             "info.publisher": '123',
//             "tags.0": 'Eletronic'
//         }
//     }
// )

// db.books.updateOne(
//     { _id: 1 },
//     {
//         $set: {
//             item: "Mod",
//             "info.publisher": '123',
//             "tags.0": 'Eletronic',
//             'idade': 30,
//             'dataCad': new Date()
//         }
//     },
//     { upset: true }
// )

// db.books.updateMany(
//     { _id: 1 },
//     {
//         $set: {
//             item: "Mod",
//             "info.publisher": '123',
//             "tags.0": 'Eletronic',
//             'idade': 30,
//             'dataCad': new Date()
//         }
//     },
//     { upset: true }
// )

console.log(db.books.find())