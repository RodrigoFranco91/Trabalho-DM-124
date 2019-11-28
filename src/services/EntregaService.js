const db = {};

let sequence = 0;

class EntregaService {

  static add(newEntrega) {
    return new Promise((resolve) => {
      const entrega = {
        id: ++sequence,
        idDoPedido: newEntrega.idDoPedido,
        idDoCliente: newEntrega.idDoCliente,
        nomeDoRecebedor: newEntrega.nomeDoRecebedor,
        cpfDoRecebedor: newEntrega.cpfDoRecebedor,
        recebedorComprador: newEntrega.recebedorComprador || false,
        dataHoraEntrega: newEntrega.dataHoraEntrega,
        localizacao: newEntrega.localizacao
      };
      db[entrega.id] = entrega;
      resolve(entrega);
    });
  }

  static getAll() {

  }

  static getById(id) {

  }

  static update(id, updatedEntrega) {
    
  }

  static delete(id) {

  }

  
}

module.exports = EntregaService;