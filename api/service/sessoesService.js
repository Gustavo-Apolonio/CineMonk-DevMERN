import SessoesDatabase from "../database/sessoesDatabase.js";

const db = new SessoesDatabase();

export default class SessoesService {
  async listarDatas(data) {
    if (new Date(data) > new Date()) throw "dataBrError";

    return await db.listarDatas(data);
  }

  async listarFilmes(data) {
    return await db.listarFilmes(data);
  }
}
