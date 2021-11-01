'use strict'
module.exports = function(app) {
    var certificadoController = require('../controllers/certificadoController')

    app.route('/certificado')
        .get(certificadoController.lista_todos_os_certificados)
        .post(certificadoController.adiciona_um_certificado)
    
    app.route('/certificado/:certificadoId')
        .get(certificadoController.lista_um_certificado)
        .put(certificadoController.atualiza_um_certificado)
        .delete(certificadoController.remove_um_certificado)

}