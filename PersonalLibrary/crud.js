function criarCollection(nomeCollection) {
    db.createCollection(nomeCollection);
}

function inserirRegistro(collection, registro) {
    collection.insertOne(registro);
}

function inserirRegistros(collection, registros) {
    collection.insertMany(registros);
}

function atualizarUm(collection, filtro, update) {
    collection.updateOne(filtro, { $set: update });
}

function atualizarMuitos(collection, filtro, update) {
    collection.updateMany(filtro, { $set: update });
}

function deletarUm(collection, filtro) {
    collection.deleteOne(filtro);
}

function deletarMuitos(collection, filtro) {
    collection.deleteMany(filtro);
}