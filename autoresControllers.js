const modelsAutores = require('../models/autoresModels.js')

module.export = {
    autoresMenu,
    autoresGetAll

}
function autoresMenu(res, req){
    res.json('Rota autores Encontrada!!')
    console.log('Rota autores Encontrada!"')
}
function autoresGetAll(res, req){
    res.json('Rota Listagem Autores Encontrada!!')
    console.log('Rota Listagem Autores Encontrada!!')
}