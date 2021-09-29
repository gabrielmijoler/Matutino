const controllerEditoras = require('../controllers/controllerEditoras.js')

server.get('/autoeditoras', controllerEditoras.editorasMenu)

server.get('/editoras/listar', controllerEditoras.editorasGetAll)
 
server.get('/editoras/consultar/:codigo', controllerEditoras.editorasGetByld)

