load("./CDN_BDNR/AulaCDN_MongoDb/scriptOPeracoes.js");

//qual o comando para criar o banco
use("Escola");

//qual o comando para criar a coleção (tabela)
// db.createCollection("Alunos");

//inserir registros (documento)
// db.Alunos.insertOne({
//     nome: "Ricardo",
//     idade: 30,
//     endereco: "x"
// });

//inserir um lote de pessoas
// db.Alunos.insertMany([
//     { nome: "Maria", idade: 24, endereco: "A" },
//     { nome: "Isaac", idade: 30, endereco: "B" },
//     { nome: "Angelica", idade: 22, endereco: "C" },
//     { nome: "Angelica", idade: 48, endereco: "C", email: "ang@x.com" },
// ]);

//exibir um documento (registro)
// console.log(db.Alunos.find({}));
// buscarCollection(db.Alunos);

//fazer um filtro (sql = select * from tabela where coluna = ?)
// console.log(db.Alunos.find({nome: 'Ricardo' }));
// console.log(db.Alunos.find({ nome: 'Ricardo' }, { _id: 0, nome: 1, idade: 1 }));

//delete documentos
// console.log(db.Alunos.countDocuments({}));
// contagemDocuments(db.Alunos);

//delete documentos (Se tiver varios repetidos e o primeiro que encontra para deletar)
// console.log(db.Alunos.deleteOne({ nome: "Ricardo" }));