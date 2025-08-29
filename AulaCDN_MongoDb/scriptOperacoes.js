function buscarCollection(collection) {
    printjson(collection.find().toArray());
}

function contagemDocuments(collection) {
    printjson(collection.countDocuments({}))
}

function criarCollection(nomeCollection) {
    db.createCollection(nomeCollection);
}

function inserirRegistro(registro) {
    db.Alunos.insertOne(registro);
}

function inserirRegistros(registros) {
    db.Alunos.insertMany(registros);
}