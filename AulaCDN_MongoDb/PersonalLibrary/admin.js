function criarBanco(nome) {
    use(nome);
}

function listarColecoes() {
    printjson(db.getCollectionNames());
}

function deletarColecao(nome) {
    db[nome].drop();
}

function deletarBanco() {
    db.dropDatabase();
}