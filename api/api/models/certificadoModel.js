
let mongoose = require('mongoose')
let Schema = mongoose.Schema

let certificadoSchema = Schema({
    id: {
        type: Number
    },
    nome: {
        type: String
    },

    tipo: {
        type: String
    },

    anexo: {
        type: String
    },
    
    horas: {
        type: Number
    
    },

    status: {
        type: Boolean
    } 

    /* lista: {
        type: Boolean
    } */
})

module.exports = mongoose.model('certificado', certificadoSchema)