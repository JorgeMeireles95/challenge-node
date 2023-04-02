
const database = require('../models');

class Services {
    constructor(model) {
        this.model = model;
    }
    
    async criaRegistro(data) {
        return database[this.model].create(data)
    }
    
    async pegaTodosOsRegistros() {
        return database[this.model].findAll()
    }
    
    async pegaUmRegistro(id) {
        return database[this.model].findOne({ where: {id:id } });
    }
    
    async atualizaRegistro(dadosAtualizados, id, transacao = {}){
        return database[this.model]
          .update(dadosAtualizados, { where: { id: id } }, transacao)
      }
    
      async deletarRegistro(id) {
        return database[this.nomeDoModelo].destroy({ where: { id: id } })
      }
}


module.exports = Services;