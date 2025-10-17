use('Escola')

// Criando uma coleção com validação de esquema
// db.createCollection("Aluno", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "esquema de validação de coleção",
//             required: ["nome", "idade", "sexo"],
//             properties: {
//                 nome: {
//                     bsonType: "string",
//                     description: "Campo nome é obrigatório"
//                 },
//                 idade: {
//                     bsonType: "int",
//                     description: "Campo idade é obrigatório"
//                 },
//                 sexo: {
//                     bsonType: "string",
//                     description: "Campo sexo é obrigatório"
//                 }
//             }
//         }
//     }
// })

// db.Aluno.insertOne(
//     {
//         nome: "Emerson",
//         idade: 20
//     }
// )

// db.Aluno.insertOne(
//     {
//         nome: "Emerson",
//         idade: 20,
//         sexo: "M"
//     }
// )

// db.Aluno.insertOne(
//     {
//         nome: "Emerson",
//         idade: "20",
//         sexo: "M"
//     }
// )

// db.Aluno.insertOne(
//     {
//         nome: "Emerson",
//         idade: Int32("20"),
//         sexo: "M"
//     }
// )

// db.Aluno.insertOne(
//     {
//         nome: "Emerson",
//         idade: 20,
//         sexo: "M",
//         email: "emerson@fatec.com"
//     }
// )

// Validando o campo _id como ObjectId e bloqueando campos adicionais
// db.createCollection("Aluno", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "esquema de validação de coleção",
//             additionalProperties: false,
//             required: ["_id", "nome", "idade", "sexo"],
//             properties: {
//                 _id: {
//                     bsonType: "objectId",
//                     description: "Auto incremento"
//                 },
//                 nome: {
//                     bsonType: "string",
//                     description: "Campo nome é obrigatório"
//                 },
//                 idade: {
//                     bsonType: "int",
//                     description: "Campo idade é obrigatório"
//                 },
//                 sexo: {
//                     bsonType: "string",
//                     description: "Campo sexo é obrigatório"
//                 }
//             }
//         }
//     }
// })

// db.runCommand({
//     collMod: "Aluno",
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "esquema de validação de coleção",
//             additionalProperties: false,
//             required: ["_id", "nome", "idade", "sexo"],
//             properties: {
//                 _id: {
//                     bsonType: "objectId",
//                     description: "Auto incremento"
//                 },
//                 nome: {
//                     bsonType: "string",
//                     description: "Campo nome é obrigatório"
//                 },
//                 idade: {
//                     bsonType: "int",
//                     description: "Campo idade é obrigatório"
//                 },
//                 sexo: {
//                     bsonType: "string",
//                     description: "Campo sexo é obrigatório"
//                 }
//             }
//         }
//     }
// });

// Cria coleção "Aluno" com validação de esquema (JSON Schema)
// - bloqueia campos adicionais (additionalProperties: false)
// - valida tipos, padrões de email e telefone
// db.createCollection("Aluno", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "Esquema de validação de Aluno",
//             additionalProperties: false,
//             required: ["_id", "nome", "idade", "sexo", "email", "telefone"],
//             properties: {
//                 _id: {
//                     bsonType: "objectId",
//                     description: "Identificador automático (ObjectId)"
//                 },
//                 nome: {
//                     bsonType: "string",
//                     description: "Campo 'nome' é obrigatório"
//                 },
//                 idade: {
//                     bsonType: "int",
//                     minimum: 0,
//                     description: "Campo 'idade' é obrigatório e deve ser um inteiro"
//                 },
//                 sexo: {
//                     bsonType: "string",
//                     enum: ["M", "F"],
//                     description: "Campo 'sexo' é obrigatório (M, F)"
//                 },
//                 email: {
//                     bsonType: "string",
//                     pattern: "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$",
//                     description: "Email deve ser um endereço válido"
//                 },
//                 telefone: {
//                     bsonType: "string",
//                     pattern: "^(\\+55\\s?)?(\\(?\\d{2}\\)?\\s?)?(9?\\d{4}-?\\d{4})$",
//                     description: "Telefone deve estar em formato válido brasileiro (ex: +55 11 98765-4321)"
//                 }
//             }
//         }
//     }
// });

// Exemplo válido (será aceito)
// db.Aluno.insertOne({
//     nome: "Maria Silva",
//     idade: 23,
//     sexo: "F",
//     email: "maria.silva@example.com",
//     telefone: "11987654321"
// });

// Exemplo inválido (email e telefone fora do padrão) - falhará na validação
// db.Aluno.insertOne({
//   nome: "João",
//   idade: 30,
//   sexo: "M",
//   email: "joao#exemplo",
//   telefone: "12345"
// });

// db.Aluno.drop()