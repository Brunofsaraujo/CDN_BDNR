function contarDocumentos(collection, filtro = {}) {
    print("Total:", db[collection].countDocuments(filtro));
}

function existeDocumento(collection, filtro) {
    return collection.findOne(filtro) !== null;
}

function buscarCamposUnicos(collection, campo) {
    const valores = collection.distinct(campo);
    printjson(valores);
}