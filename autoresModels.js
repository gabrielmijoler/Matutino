const conexao = require('../../confi/conexao.js')


module.export = {
    getAllAutores

}
function getAllAutores(callback){
    conexao.query('selec * from autores')
}