// Bruno Araujo - MongoDB - Atividade 1 - CDN 4 Semestre

// Script contendo os comandos solicitados na atividade de MongoDB

// 1. Importar o arquivo "restaurants_street.json" para o mongodb Compass.
// RESPOSTA:
// Importado os datasets de exemplo do MongoDB através da
// orientação oficial: https://www.mongodb.com/pt-br/docs/atlas/sample-data/#std-label-load-sample-data
// para Sistemas Locais

// https://www.mongodb.com/try/download/database-tools
// curl  https://atlas-education.s3.amazonaws.com/sampledata.archive -o sampledata.archive
// mongorestore --archive=sampledata.archive --port=<port-number>

use("sample_restaurants");

// 2. Escreva a consulta que demonstre todos os documentos da coleção restaurantes.

// RESPOSTA:
console.log(db.restaurants.countDocuments({}));

// 3. Quantos documentos existem na coleção restaurantes.
// RESPOSTA:
//---------------------------------------------------------------
// Existem 25359 documentos na coleção restaurants
//---------------------------------------------------------------

// 4. Escreva a consulta que retorne o nome e o bairro, mas não o _id, de todos os restaurantes.
// RESPOSTA:
console.log(db.restaurants.find({}, { _id: 0, name: 1, borough: 1 }));

// 5. Escreva a consulta que retorne o nome e o bairro, mas não o _id, de todos os restaurantes que estejam no bairro Bronx.
// RESPOSTA:
console.log(
	db.restaurants.find({ borough: "Bronx" }, { _id: 0, name: 1, borough: 1 })
);

// 6. Escreva uma consulta que retorne  uma nota de inspeção (grade) de todos os restaurantes que seja maior que 5.
// RESPOSTA:
console.log(db.restaurants.find({ "grades.score": { $gt: 5 } }));

// 7. Escreva a cozinha de todos os restaurantes que não sejam do tipo American.
// RESPOSTA:
console.log(db.restaurants.find({ cuisine: { $ne: "American" } }));

// 8. Escreva a consulta que retorne o nome de todos os restaurantes que tenham a palavra "Pizza" no nome.
// RESPOSTA:
console.log(db.restaurants.find({ name: /Pizza/ }, { name: 1, _id: 0 }));

// 9. Escreva a consulta que retorne o nome de todos os restaurantes que tenham a palavra "Pizza" no nome e sejam do bairro Brooklyn.
// RESPOSTA:
console.log(
	db.restaurants.find(
		{ name: /Pizza/, borough: "Brooklyn" },
		{ name: 1, borough: 1, _id: 0 }
	)
);

// 10. Exclua os documentos que uma nota de inspeção (grade) seja inferior a 5.
// RESPOSTA:
console.log(db.restaurants.deleteMany({ "grades.score": { $lt: 5 } }));

// 11. Mostra quantidade  atualizado de documentos.
// RESPOSTA:
console.log(db.restaurants.countDocuments({}));
//------------------------------------------------------------------------------------------------------
// Existem 17321 documentos na coleção restaurants após a exclusão dos documentos com nota inferior a 5
//------------------------------------------------------------------------------------------------------

// 12. Exclua a coleção.
// RESPOSTA:
db.restaurants.drop();
