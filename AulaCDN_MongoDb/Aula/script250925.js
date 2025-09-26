use('sample_restaurants')

// console.log(
//     db.restaurants.find({})
// );

// db.CL_Endereco.insertMany([
//     {
//         nome: "Emerson",
//         endereco: [
//             {
//                 rua: "diplomatas",
//                 numero: 57,
//                 bairro: "caguaçu",
//                 cidade: "Sorocaba",
//                 uf: "SP"
//             },
//             {
//                 rua: "estrada dos dias",
//                 numero: 57,
//                 bairro: "embuema",
//                 cidade: "Embua",
//                 uf: "SP"
//             },
//         ]
//     }
// ])

// $set update

// db.CL_Endereco.updateMany(
//     { nome: /Emerson/ },
//     {
//         $set: {
//             nome: "Emerson Rocha",
//             "endereco.0.numero": 171,
//             "endereco.0.telefone": ['(11) 12121212', '(55) 1212444']
//         }
//     },
//     { upsert: true }
// )

// db.CL_Endereco.updateOne(
//     { nome: "Emerson Rocha" },
//     {
//         $rename: { 'telefone': 'telefones' }
//     }
// )

// db.CL_Endereco.updateOne(
//     { nome: /Emerson Rocha/ },
//     {
//         $set: {
//             "Idade": 35
//         }
//     },
//     { upsert: true }
// )

// db.CL_Endereco.updateOne(
//     { nome: /Emerson Rocha/ },
//     {
//         $unset: {
//             "endereco.0.telefone": ""
//         }
//     },
//     { upsert: true }
// )

// db.CL_Endereco.updateOne(
//     { nome: /Emerson Rocha/ },
//     {
//         $inc: { "Idade": 1 }
//     }
// )

// db.CL_Endereco.updateOne(
//     { nome: /Emerson Rocha/ },
//     {
//         $inc: { "Idade": -1 }
//     }
// )

// db.CL_Endereco.insertMany([
//     {
//         nome: "Caio",
//         idade: 20,
//         endereco: [
//             {
//                 rua: "Fatec 1",
//                 numero: 10,
//                 bairro: "Votorantim 1",
//                 cidade: "Votorantim",
//                 uf: "SP"
//             },
//             {
//                 rua: "Fatec 2",
//                 numero: 11,
//                 bairro: "Votorantim 2",
//                 cidade: "Votorantim",
//                 uf: "SP"
//             },
//         ]
//     },
//     {
//         nome: "Arthur",
//         idade: 25,
//         endereco: [
//             {
//                 rua: "Fatec 3",
//                 numero: 12,
//                 bairro: "Votorantim 3",
//                 cidade: "Votorantim",
//                 uf: "SP"
//             },
//             {
//                 rua: "Fatec 4",
//                 numero: 13,
//                 bairro: "Votorantim 4",
//                 cidade: "Votorantim",
//                 uf: "SP"
//             },
//         ]
//     },
//     {
//         nome: "Lucas",
//         idade: 30,
//         endereco: [
//             {
//                 rua: "Fatec 5",
//                 numero: 14,
//                 bairro: "Votorantim 5",
//                 cidade: "Votorantim",
//                 uf: "SP"
//             },
//             {
//                 rua: "Fatec 6",
//                 numero: 15,
//                 bairro: "Votorantim 6",
//                 cidade: "Votorantim",
//                 uf: "SP"
//             },
//         ]
//     }
// ])

// db.CL_Endereco.updateOne(
//     { _id: ObjectId('68d5df04fbd8c30c11eec4aa') },
//     {
//         $min: { idade: 30 }
//     }
// )

// db.CL_Endereco.updateOne(
//     { _id: ObjectId('68d5df04fbd8c30c11eec4aa') },
//     {
//         $max: { idade: 30 }
//     }
// )

// db.CL_Endereco.updateOne(
//     { _id: ObjectId('68d5df04fbd8c30c11eec4aa') },
//     {
//         $mul: { idade: 10 }
//     }
// )

// db.CL_Endereco.updateOne(
//     { _id: ObjectId('68d5df04fbd8c30c11eec4aa') },
//     {
//         $unset: { "idade": "" }
//     }
// )