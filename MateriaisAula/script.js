// Criar um banco de dados
use ("Ciencia");

// Criar uma coleção
// db.createCollection('Alunos');

// Inserir registro
// db.Alunos.insertOne({Nome:'Paulo', Idade:20, UF:'SP'});
// db.Alunos.insertOne({Nome:'Maria', Idade:30, UF:'RJ'});
// db.Alunos.insertOne({Nome:'Katia', Idade:50, UF:'RS'});

// db.Alunos.insertMany([
//     {Nome:'Luiz', Idade:50, UF:'MS'},
//     {Nome:'Isaac', Idade:10, UF:'MG'},
//     {Nome:'Anita', Idade:13, UF:'SP', email:'anita@b.com'}
// ]);

// Comando para exibir dados
// console.log( db.Alunos.find({}) );

// Exibir por colunas
// console.log( db.Alunos.find({}, {_id:0, Nome:1, UF:1}) );

// Exibir por filtro
// console.log( db.Alunos.find({Nome:'paulo'}, {_id:0, Nome:1, UF:1}) );

// console.log( db.Alunos.find({Nome:'Paulo'}, {_id:0, Nome:1, UF:1}) );

// Quantos documentos (registros) tem na coleção
// console.log( db.Alunos.countDocuments({}) );
// console.log( db.Alunos.count({}) );

// Deletar documentos
// console.log( db.Alunos.deleteOne({Nome:'Anita'}) );
// console.log( db.Alunos.delete({Nome:'Luiz'}) );

// Deletar uma coleção
// console.log( db.Alunos.drop() );

// Deletar um banco de dados
console.log( db.Ciencia.drop() );