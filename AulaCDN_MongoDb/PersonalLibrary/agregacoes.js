function contarPorCampo(collection, campo) {
    const resultado = db[collection].aggregate([
        { $group: { _id: "$" + campo, total: { $sum: 1 } } }
    ]).toArray();
    printjson(resultado);
}

function mediaPorCampo(collection, campoAgrupamento, campoMedia) {
    const resultado = db[collection].aggregate([
        { $group: { _id: "$" + campoAgrupamento, media: { $avg: "$" + campoMedia } } }
    ]).toArray();
    printjson(resultado);
}

function maximoPorCampo(collection, campoAgrupamento, campoMaximo) {
    const resultado = db[collection].aggregate([
        { $group: { _id: "$" + campoAgrupamento, maximo: { $max: "$" + campoMaximo } } }
    ]).toArray();
    printjson(resultado);
}