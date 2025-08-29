function buscarTodos(collection) {
    printjson(collection.find().toArray());
}

function buscarComFiltro(collection, filtro, projecao = {}) {
    printjson(collection.find(filtro, projecao).toArray());
}

function buscarUm(collection, filtro) {
    printjson(collection.findOne(filtro));
}

function ordenar(collection, filtro, ordem) {
    printjson(collection.find(filtro).sort(ordem).toArray());
}

function limitar(collection, limite) {
    printjson(collection.find().limit(limite).toArray());
}