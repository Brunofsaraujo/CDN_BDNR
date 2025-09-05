use("Escola");

// criar outra coleção com documento

// db.Produtos.insertMany([
//    {_id : 1, produto:"celular", preco: 1999, 
//       operadora:{ tipo01 : "vivo", tipo02: "claro", tipo03:"tim"}, qtd:30 },
 
//    {_id : 2, produto:"Roupa", preco: 300, 
//       operadora:{ tipo01 : "esporte", tipo02: "social", tipo03:"x"}, qtd:30 },
 
//    {_id : 3, produto:"TV", preco: 150, 
//       operadora:{ tipo01 : "PLASMA", tipo02: "TUBO", tipo03:"SMART"}, qtd:30 }
 
// ])
         // logica de programação (comparação)  == 
// console.log( db.Produtos.find( {"operadora.tipo01": "vivo"},
//      {"operadora.tipo02": 0, "operadora.tipo03":0 } ));

 //OPERADORES DE CONSULTA
 
 // Comparação
  //->  $eq = Igual a ; ==
  // -> $gt = Maior que;  > 
  //->  $gte = Maior ou Igual >=
  // -> $in  = está contido em um matriz(lista)
  // -> $lt = Menor que <
  // -> $lte = menor ou igual que <=
  // -> $ne = corresponde todos os valores que não são iguais a valor de procura
  // -> $nin = valor não e correspondido dentro da matriz
    
  
  //db.Produtos.find({"operadora.tipo01":"vivo" })
    //console.log(db.Produtos.find({"operadora.tipo01": {$eq: "vivo"} }) )

    // console.log(db.Produtos.find({"preco" : {$gt: 150}},
    //                 {_id:1, produto:1}  ));

    // console.log(db.Produtos.find({"preco" : {$gt: 150}},
    //                 {_id:1, produto:1}  ).count());

    // console.log(db.Produtos.find({"preco" : {$gte: 150}},
    //                 {_id:1, produto:1}  ));


    // console.log(db.Produtos.find({
    //       preco : { $in:[ 100, 150, 300 ]}
    // }))    
    
    // console.log( db.Produtos.find({ 
    //        preco:{ $lt:151}
    //     }));
    console.log( db.Produtos.find({ 
           preco:{ $ne:150}
        }));