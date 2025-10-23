use('Escola')

//REVISAO 1
// db.createCollection("Usuario", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "Descreva a estrutura da minha coleção",
//             required: ["nome", "rg", "cpf"],
//             properties: {
//                 nome: {
//                     bsonType: "string",
//                     description: "este campo é obrigatório seu preenchimento"
//                 },
//                 rg: {
//                     bsonType: "int",
//                     description: "Campo Ob. Rg"
//                 },
//                 cpf: {
//                     bsonType: "int",
//                     description: "Campo Ob. cpf"
//                 }
//             }
//         }
//     }
// })

// db.Usuario.insertOne(
//     {
//         nome: "Sophia",
//         rg: 123456789,
//     }
// )

// db.Usuario.insertOne(
//     {
//         nome: "Sophia",
//         rg: 123456789,
//         cpf: 987654321
//     }
// )

// db.Usuario.insertOne(
//     {
//         nome: "Sophia",
//         rg: 123456789,
//         cpf: 987654321,
//         endereco: "rua x, numero 147, b, f, SP"
//     }
// )

//REVISAO 2
db.runCommand({
    collMod: "Usuario",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Só vai aceitar campos requeridos",
            additionalProperties: false,
            required: ["_id", "nome", "rg", "cpf"],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "Auto incremento"
                },
                nome: {
                    bsonType: "string",
                    description: "este campo é obrigatório seu preenchimento"
                },
                rg: {
                    bsonType: "int",
                    description: "Campo Ob. Rg"
                },
                cpf: {
                    bsonType: "int",
                    description: "Campo Ob. cpf"
                },
                endereco: {
                    bsonType: "object",
                    required: ["rua", "numero", "cidade", "estado"],
                    properties: {
                        rua: {
                            bsonType: "string",
                            description: "Nome da rua"
                        },
                        numero: {
                            bsonType: "int",
                            description: "Número do endereço"
                        },
                        cidade: {
                            bsonType: "string",
                            description: "Nome da cidade"
                        },
                        estado: {
                            bsonType: "string",
                            minLength: 2,
                            maxLength: 2,
                            description: "Sigla do estado"
                        }
                    }
                },
                telefone: {
                    bsonType: "array",
                    items: {
                        bsonType: "string",
                        pattern: "^\\d{11}$",
                        description: "Número de telefone com 11 dígitos"
                    }
                }
            }
        }
    },
    validationLevel: "strict"
})

printjson(db.Usuario.find().toArray())