
let mongoose = require('mongoose')
let certificado = mongoose.model('certificado')

// GET ALL
exports.lista_todos_os_certificados = function(req, res) {
    certificado.find({}, function(err, certificados) {
        if(err) {
            res.send(err)
        }
        res.json(certificados)
    })
}

// GET ID
exports.lista_um_certificado = function(req, res) {
    certificado.findOne({"_id": req.params.certificadoId}, function(err, certificado) {
        if(err) {
            res.send(err)
        }
        res.json(certificado)
    })
}

// POST
exports.adiciona_um_certificado = function(req, res) {
    var novo_certificado = new certificado(req.body)
    novo_certificado.save(function(err, certificado) {
        if(err) {
            res.send(err)
        }
        res.json(certificado)
    })
}

// PUT
exports.atualiza_um_certificado = function(req, res) {
    certificado.findOneAndUpdate({_id: req.params.certificadoId}, req.body, {new: true}, 
        function(err, certificado) {
            if (err) {
                res.send(err);
            }
            res.json(certificado);
        });
}

// DELETE
exports.remove_um_certificado = function(req, res) {
    certificado.remove({_id: req.params.certificadoId}, function(err, certificado) {
        if(err) {
            res.send(err)
        }
        res.json({"Mensagem": "certificado deletado com sucesso"})
    })
}