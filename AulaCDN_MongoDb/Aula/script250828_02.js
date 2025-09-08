use("Escola");

// const tiposCelular = {
//     tipo01: "vivo",
//     tipo02: "claro",
//     tipo03: "tim",
//     qtd: 30
// };

// const tiposRoupa = {
//     tipo01: "esporte",
//     tipo02: "social",
//     tipo03: "x",
//     qtd: 30
// };

// const tiposTv = {
//     tipo01: "PLASMA",
//     tipo02: "TUBO",
//     tipo03: "SMART",
//     qtd: 30
// };

//criar outra colecao com documento
// db.Produtos.insertMany([
//     { _id: 1, produto: "celcular", preco: 1900, operadora: tiposCelular },
//     { _id: 2, produto: "roupa", preco: 1999, operadora: tiposRoupa },
//     { _id: 3, produto: "TV", preco: 150, operadora: tiposTv }
// ])

// console.log(db.Produtos.find({ "operadora.tipo01": "vivo" }, { "operadora.tipo02": 0 , "operadora.tipo03": 0 }));

//operadores e consulta

//comparacao
//-> $eq = Igual a ==;
//-> $gt = Maior que >;
//-> $gte = Maior igual >=;
//-> $in = Esta contida em uma matriz (lista);
//-> $lt = Menor que <;
//-> $lte = Menor ou igual que <=;
//-> $ne = corresponde todos os valores que nao sao iguais a valor de procura
//-> $nin = valor nao e correspondido dentro da matriz

// console.log(db.Produtos.find({ "operadora.tipo01": { $eq: "vivo" } }));
// buscarComFiltro(db.Produtos, { "operadora.tipo01": { $eq: "vivo" } })

// console.log(db.Produtos.find({ "preco": { $gt: 150 } }, { _id: 1, produto: 1 }));
// console.log(db.Produtos.find({ "preco": { $gt: 150 } }, { _id: 1, produto: 1 }).count());

// console.log(db.Produtos.find({ "preco": { $gte: 150 } }, { _id: 1, produto: 1 }));

// console.log(db.Produtos.find({ "preco": { $in: [100, 150, 1900] } }));

// console.log(db.Produtos.find({ "preco": { $lt: 151 } }));

// console.log(db.Produtos.find({ "preco": { $ne: 150 } }));

// console.log(db.Produtos.find({ "preco": { $nin: [1900] } }));

console.log(db.Produtos.find({
    "preco": { $nin: [150, 1000, 300] }
}));