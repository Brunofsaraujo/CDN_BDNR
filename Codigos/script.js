// criar um banco de dados
use("Ciencia");

// criar uma colecao
//db.createCollection('Alunos');

// inserir registro
// db.Alunos.insertOne({nome: "Paulo", idade: 20, UF: "SP"});
// db.Alunos.insertOne({nome: "Maria", idade: 30, UF: "RJ"});
// db.Alunos.insertOne({nome: "Katia", idade: 50, UF: "RS"});

// db.Alunos.insertMany([
//     {nome: "Luiz", idade: 50, UF: "MS"},
//     {nome: "Isaac", idade: 10, UF: "MG"},
//     {nome: "Anita", idade: 13, UF: "SP", email: "anita@x.com"}
// ]);

// exibir por colunas
// console.log(db.Alunos.find({},{_id:0, nome:1, UF:1}));
// console.log(db.Alunos.find({nome:"paulo"},{_id:0, nome:1, UF:1}));

// comando para exibir dados
// console.log(db.Alunos.find({}));

// quantos documentos(registro) tem a colecao
console.log(db.Alunos.countDocuments({}));
console.log(db.Alunos.count()); //deprecated