// Bruno Araujo - MongoDB - Atividade 2 - CDN 4 Semestre

// Script organizado em blocos independentes para execucao celula a celula.

// =============================================================================
// Pipeline Agregação
// =============================================================================

// =============================================================================
// Preparar colecao livros (verificar/importar livros.json)
// =============================================================================
use("biblioteca")

// mongoimport --db biblioteca --collection livros --file ./livros.json --jsonArray

var livrosTotal = db.livros.countDocuments()
print("Total de documentos: " + livrosTotal);

// =============================================================================
// Livros da categoria Fantasia
// =============================================================================
print("-- Livros da categoria Fantasia --");
printjson(
	db.livros
		.aggregate([
			{ $match: { categoria: "Fantasia" } },
			{ $project: { _id: 0, titulo: 1, categoria: 1 } },
		])
		.toArray()
);

// =============================================================================
// Titulo e Total (preco * quantidade)
// =============================================================================
print("-- Titulo e Total (preco x quantidade_vendida) --");
printjson(
	db.livros
		.aggregate([
			{
				$project: {
					_id: 0,
					titulo: 1,
					Total: { $multiply: ["$preco", "$quantidade_vendida"] },
				},
			},
		])
		.toArray()
);

// =============================================================================
// Total por categoria (decrescente)
// =============================================================================
print("-- Total por categoria (ordem decrescente) --");
printjson(
	db.livros
		.aggregate([
			{
				$group: {
					_id: "$categoria",
					valorTotalCategoria: {
						$sum: { $multiply: ["$preco", "$quantidade_vendida"] },
					},
				},
			},
			{ $sort: { valorTotalCategoria: -1 } },
		])
		.toArray()
);

// =============================================================================
// Media de preco por categoria (decrescente)
// =============================================================================
print("-- Media de vendas por categoria (ordem decrescente) --");
printjson(
	db.livros
		.aggregate([
			{
				$group: {
					_id: "$categoria",
					mediaVendasCategoria: { $avg: "$preco" },
				},
			},
			{ $sort: { mediaVendasCategoria: -1 } },
		])
		.toArray()
);

// =============================================================================
// Top 5 livros mais vendidos
// =============================================================================
print("-- Top 5 livros mais vendidos --");
printjson(
	db.livros
		.aggregate([
			{ $sort: { vendas: -1 } },
			{ $limit: 5 },
			{
				$project: {
					_id: 0,
					titulo: 1,
					quantidade: 1,
					vendas: 1,
				},
			},
		])
		.toArray()
);

// =============================================================================
// Autor com maior volume de vendas
// =============================================================================
print("-- Autor com maior volume de vendas --");
printjson(
	db.livros
		.aggregate([
			{
				$group: {
					_id: "$autor",
					totalVendasAutor: { $sum: "$quantidade_vendida" },
				},
			},
			{ $sort: { totalVendasAutor: -1 } },
			{ $limit: 1 },
		])
		.toArray()
);

// =============================================================================
// Livros publicados apos 2000 com mais de 2000 vendas
// =============================================================================
print("-- Livros publicados apos 2000 com mais de 2000 vendas --");
printjson(
	db.livros
		.aggregate([
			{ $match: { ano_publicacao: { $gt: 2000 }, quantidade_vendida: { $gt: 2000 } } },
			{
				$project: {
					_id: 0,
					titulo: 1,
					autor: 1,
					ano_publicacao: 1,
					vendas: 1,
				},
			},
		])
		.toArray()
);

// =============================================================================
// Operadores de Atualização
// =============================================================================

// =============================================================================
// Inserir dados base para operadores de atualizacao
// =============================================================================
use("Pessoa")

db.usuario.drop();
print("-- Inserindo documentos iniciais na colecao usuarios --");
printjson(
	db.usuario.insertMany([
		{
			_id: 1,
			nome: "Joao",
			idade: 25,
			pontos: 50,
			ativo: false,
			interesses: ["esporte", "musica"],
		},
		{
			_id: 2,
			nome: "Ana",
			idade: 30,
			pontos: 80,
			ativo: true,
			interesses: ["leitura", "cinema"],
		},
		{
			_id: 3,
			nome: "Carlos",
			idade: 22,
			pontos: 40,
			ativo: false,
			interesses: ["games"],
		},
		{
			_id: 4,
			nome: "Beatriz",
			idade: 27,
			pontos: 90,
			ativo: true,
			interesses: ["arte", "viagem"],
		},
		{
			_id: 5,
			nome: "Diego",
			idade: 35,
			pontos: 60,
			ativo: false,
			interesses: ["carros", "musica"],
		},
		{
			_id: 6,
			nome: "Fernanda",
			idade: 29,
			pontos: 100,
			ativo: true,
			interesses: ["moda"],
		},
		{
			_id: 7,
			nome: "Gustavo",
			idade: 24,
			pontos: 70,
			ativo: false,
			interesses: ["futebol"],
		},
		{
			_id: 8,
			nome: "Helena",
			idade: 32,
			pontos: 55,
			ativo: true,
			interesses: ["fotografia", "cozinha"],
		},
		{
			_id: 9,
			nome: "Igor",
			idade: 28,
			pontos: 45,
			ativo: false,
			interesses: ["filmes"],
		},
		{
			_id: 10,
			nome: "Julia",
			idade: 26,
			pontos: 95,
			ativo: true,
			interesses: ["danca", "arte"],
		},
	])
);

// =============================================================================
// Atualizar Joao para ativo = true
// =============================================================================
print('-- Atualizando "Joao" para ativo = true --');
printjson(db.usuario.updateOne({ nome: "Joao" }, { $set: { ativo: true } }));

// =============================================================================
// Acrescentar 10 pontos para Beatriz
// =============================================================================
print('-- Acrescentando 10 pontos para "Beatriz" --');
printjson(db.usuario.updateOne({ nome: "Beatriz" }, { $inc: { pontos: 10 } }));

// =============================================================================
// Remover idade de Diego
// =============================================================================
print('-- Removendo campo idade de "Diego" --');
printjson(db.usuario.updateOne({ nome: "Diego" }, { $unset: { idade: "" } }));

// =============================================================================
// Renomear pontos para pontuacao
// =============================================================================
print("-- Renomeando campo pontos para pontuacao --");
printjson(db.usuario.updateMany({}, { $rename: { pontos: "pontuacao" } }));

// =============================================================================
// Adicionar "viagem" aos interesses de Fernanda
// =============================================================================
print('-- Adicionando "viagem" aos interesses de "Fernanda" --');
printjson(
	db.usuario.updateOne(
		{ nome: "Fernanda" },
		{ $addToSet: { interesses: "viagem" } }
	)
);

// =============================================================================
// Limitar pontuacao maxima a 100
// =============================================================================
print("-- Atualizando pontuacao > 100 para 100 --");
printjson(
	db.usuario.updateMany(
		{ pontuacao: { $gt: 100 } },
		{ $set: { pontuacao: 100 } }
	)
);

// =============================================================================
// Ajustar idades menores que 20 para 20
// =============================================================================
print("-- Definindo idade minima 20 --");
printjson(db.usuario.updateMany({ idade: { $lt: 20 } }, { $set: { idade: 20 } }));

// =============================================================================
// Adicionar campo atualizaEm com data/hora atual
// =============================================================================
print('-- Adicionando campo "atualizaEm" com data/hora atual --');
printjson(db.usuario.updateMany({}, { $currentDate: { atualizaEm: true } }));

// =============================================================================
// Validação de Esquema
// =============================================================================

// =============================================================================
// Colecao filmes basica
// =============================================================================
use("midia")

db.filmes.drop();
print("-- Criando colecao filmes com campos obrigatorios --");
printjson(
	db.createCollection("filmes", {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: ["titulo", "ano", "genero"],
				properties: {
					titulo: { bsonType: "string" },
					ano: { bsonType: "int", minimum: 1888 },
					genero: { bsonType: "string" },
				}
			},
		},
	})
);

print("-- Inserindo documento valido em filmes --");
printjson(
	db.filmes.insertOne({
		titulo: "Viagem Fantastica",
		ano: 2021,
		genero: "Ficcao Cientifica",
	})
);

printjson(
	db.filmes.insertOne({
		titulo: "O Ano Sem Fim",
		ano: 2020,
	})
);

// =============================================================================
// Colecao filmesDetalhados
// =============================================================================
db.filmesDetalhados.drop();
print("-- Criando colecao filmesDetalhados com campos obrigatorios e opcionais --");
printjson(
	db.createCollection("filmesDetalhados", {
		validator: {
			$jsonSchema: {
				bsonType: "object",
				required: [
					"titulo",
					"ano",
					"genero",
					"diretor",
					"elenco",
					"classificacao",
				],
				properties: {
					titulo: { bsonType: "string" },
					ano: { bsonType: "int", minimum: 1888 },
					genero: { bsonType: "string" },
					diretor: { bsonType: "string" },
					elenco: {
						bsonType: "array",
						minItems: 1,
						items: { bsonType: "string" },
					},
					classificacao: {
						enum: ["livre", "10", "12", "14", "16", "18"],
					},
					duracao: { bsonType: ["int", "null"], minimum: 1 },
					nota: { bsonType: ["double", "int"], minimum: 0, maximum: 10 },
					comentario: { bsonType: ["string", "null"] },
				},
			},
		},
	})
);

print("-- Inserindo documento valido em filmesDetalhados --");
printjson(
	db.filmesDetalhados.insertOne({
		titulo: "Aventura no Espaco",
		ano: 2019,
		genero: "Aventura",
		diretor: "Marina Souza",
		elenco: ["Carlos Dias", "Fernanda Lima"],
		classificacao: "12",
		duracao: 128,
		nota: 8.7,
		comentario: "Filme com otimos efeitos visuais.",
	})
);

print("-- Tentando inserir documento invalido em filmesDetalhados --");
printjson(
	db.filmesDetalhados.insertOne({
		titulo: "Sombras do Passado",
		ano: 2015,
		genero: "Suspense",
		diretor: "Julio Andrade",
		elenco: ["Larissa Reis"],
		classificacao: "25",
		nota: 11,
	})
);

// =============================================================================
// Conceitos sobre indices
// =============================================================================
// "-- Conceitos de indices no MongoDB --"
// "1P. Explique o que são índices no MongoDB e qual é a sua importância para o" + 
// "desempenho das consultas em grandes volumes de dados."

// "1R. Indices sao estruturas que armazenam referencias ordenadas aos valores de campos, " +
// "reduzindo full collection scans e acelerando consultas em colecoes volumosas."

// "2P.Descreva três tipos de índices suportados pelo MongoDB (por exemplo, simples" +
// ", compostos, de texto, geoespaciais, etc.) e explique em quais cenários cada" +
// "tipo é mais indicado."

// "2R_A. Indice simples ({ campo: 1/-1 }) cobre um unico atributo e e indicado para buscas pontuais " +
// "ou ordenacoes por um campo dominante (ex.: identificador externo, data de criacao)."
// "2R_B. Indice composto ({ campoA: 1, campoB: -1 }) atende consultas que filtram e ordenam por " +
// "multiplos campos respeitando a ordem de prefixo, como relatorios por genero e ano."
// "2R_C. Indice de texto ({ campo: \"text\" }) permite buscas por termos usando $text e classifica por relevancia. " +
// "Alternativamente, indices geoespaciais 2d/2dsphere suportam proximidade e consultas baseadas em localizacao."

// "3P. Embora os índices melhorem o desempenho de leitura, eles também podem ter " +
// "impactos negativos em determinadas operações. Explique quais são esses impactos" +
// "e como o uso excessivo de índices pode afetar o armazenamento"

// "3R. Impactos: cada operacao de escrita precisa atualizar os indices, tornando inserts/updates/deletes mais lentos; " +
// "indices ocupam espaco adicional em disco e memoria; excesso de indices compete por cache, " +
// "gera planos subotimos e aumenta o custo de manutencao e backup."