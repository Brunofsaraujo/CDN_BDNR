use('Escola');

db.createCollection("Alunos");

// inserir registro(documento)
//db.Alunos.insertOne( { nome:"Ricardo", idade: 30, endereco:"x" });

// db.Alunos.insertMany([
//    {nome:"Maria", idade:42, endereco:"A"},
//    {nome:"Isaac", idade:30, endereco:"b"},
//    {nome:"Angelica", idade:22, endereco:"C"},
//    {nome:"Angelica", idade:48, endereco:"C", email:"ang@x.com"},

// ]);


// exibir documentos(Registro)
// console.log(  db.Alunos.find({}) );
// fazer um filtro ( sql = select * from tabela where coluna = ? )
    // Nosql
   // console.log( db.Alunos.find({nome: 'Ricardo' }));
//( seletc nome, idade from alunos where nome = "Ricardo");
 // Nosql
  console.log( db.Alunos.find({nome: 'Ricardo' },{_id:0, nome:1, idade:1} ) );
 // console.log( db.Alunos.distinct( "nome", {nome: 'Ricardo' },{_id:0, nome:1, idade:1} ) );

  // delete documentos
    console.log( db.Alunos.countDocuments({}) ); //7
    console.log(db.Alunos.deleteOne({nome:"Ricardo"}));
    console.log( db.Alunos.countDocuments({}) );//6
    console.log(db.Alunos.find({})); 

