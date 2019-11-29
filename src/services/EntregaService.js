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
        recebedorEhComprador: newEntrega.recebedorEhComprador || false,
        dataEntrega: newEntrega.dataEntrega,
        horaEntrega: newEntrega.horaEntrega,
        localizacao: newEntrega.localizacao,
        entregaRealizada: newEntrega.entregaRealizada || false
      };
      db[entrega.id] = entrega;
      resolve(entrega);
    });
  }

  static getAll() {
    const toArray = key => db[key];
    return new Promise((resolve) => {
      const entregas = Object.keys(db).map(toArray);
      resolve(entregas);
    });
  }

  static getById(id) {
    return new Promise((resolve) => {
      resolve(db[id]);
    });
  }

  static update(id, updatedEntrega) {
    return new Promise(async (resolve) => {
      const entrega = await EntregaService.getById(id);
      if (entrega) {
        const recebedorEhCompradorhasValue = updatedEntrega.recebedorEhComprador != null;
        const entregaRealizadahasValue = updatedEntrega.entregaRealizada != null;
        entrega.idDoPedido = updatedEntrega.idDoPedido || entrega.idDoPedido;
        entrega.idDoCliente = updatedEntrega.idDoCliente || entrega.idDoCliente;
        entrega.nomeDoRecebedor = updatedEntrega.nomeDoRecebedor || entrega.nomeDoRecebedor;
        entrega.cpfDoRecebedor = updatedEntrega.cpfDoRecebedor || entrega.cpfDoRecebedor;
        entrega.dataEntrega = updatedEntrega.dataEntrega || entrega.dataEntrega;
        entrega.horaEntrega = updatedEntrega.horaEntrega || entrega.horaEntrega;
        entrega.localizacao = updatedEntrega.localizacao || entrega.localizacao;
        entrega.recebedorEhComprador = recebedorEhCompradorhasValue ? updatedEntrega.recebedorEhComprador : entrega.recebedorEhComprador;
        entrega.entregaRealizada = entregaRealizadahasValue ? updatedEntrega.entregaRealizada : entrega.entregaRealizada;
        resolve(entrega);
      }
      resolve(null);
    });
  }

  static delete(id) {
    return new Promise((resolve) => {
      const entrega = db[id];
      if (entrega) {
        delete db[id];
        resolve(true);
      }
      resolve(false);
    });
  }

}

module.exports = EntregaService;