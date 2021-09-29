const modelsEditoras = require('../models/editorasModels.js')

module.export = {
    editorasMenu,
    editorasGetAll,
    editorasGetByld

}
function editorasMenu(res, req){
    res.json('Rota Editoras Encontrada!!')
    console.log('Rota Editoras Encontrada!"')
}
function editorasGetAll(res, req){
    console.log('Listar Autores {M O D E L}}')
    modelsEditoras.getAllEditoras(function(err, resposta){
        console.log('Retorno de Editoras {M O D E L}', resposta)
        if(err){
            throw err
        }else{
            res.json(resposta)
        }
    })
}
function editorasGetByld(res, req){
    const id = req.params.codigo
    console.log('Parametros Esperado:' + id)
    modelsAutores.getAllEditoras(id, function(err, resposta){
        console.log('Retorno de Editoras id {M O D E L}', resposta)
        if(err){
            throw err
        }else{
            res.json(resposta)
        }
    })
}